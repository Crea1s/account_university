import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import { createRef, useState } from "react";

export default function PostForm({create}) {
    const [post, setPost] = useState({
        title: "",
        body: "",
      });
      //  const [title, setTitle] = useState("");
      //  const [body, setBody] = useState("");
      //  const bodyInputRef = useRef();
    
      function addNewPost(e) {
        e.preventDefault();
        const newPost = {...post, id: Date.now(), nodeRef: createRef(null),};
        create(newPost)
        setPost({
          title: "",
          body: "",
        });
      }
  return (
    <form>
        <MyInput
          type="text"
          placeholder="Название поста"
          value={post.title}
          onChange={(event) => setPost({ ...post, title: event.target.value })}
        />
        <MyInput
          type="text"
          placeholder="Описание поста"
          value={post.body}
          onChange={(event) => setPost({ ...post, body: event.target.value })}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
  )
}
