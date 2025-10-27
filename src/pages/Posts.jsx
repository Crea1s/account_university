import Postlist from "../components/Postlist";
import { createRef, useEffect, useRef, useState } from "react";
import "../styles/App.css";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import MySelect from "../components/UI/select/MySelect";
import { usePosts } from "../Hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../Hooks/useFetching";
import { useObserver } from "../Hooks/useObserver";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

export default function Pages() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();
  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      const result = response.data;
      const postsNew = result.map((el) => ({
        nodeRef: createRef(null),
        ...el,
      }));
      setPosts([...posts, ...postsNew]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );
  useObserver(lastElement, page < totalPages, isPostsLoading, () =>
    setPage(page + 1)
  );
  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]); //решить ассинхронность показа страницы можно с помощью useEffect либо в fetchPosts() добавить измененный параметр

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }
  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }
  function changePage(page) {
    setPage(page);
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter setFilter={setFilter} filter={filter} />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Кол-во элементов на странице"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Показать все" },
        ]}
      />
      {postError && <h1>Произошла ошибка {postError}</h1>}
      <Postlist
        removePost={removePost}
        posts={sortedAndSearchedPosts}
        title="Посты про JS"
      />
      <div ref={lastElement} style={{ height: 20, background: "red" }} />

      {isPostsLoading && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 150 }}
        >
          <Loader />
        </div>
      )}
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
}
