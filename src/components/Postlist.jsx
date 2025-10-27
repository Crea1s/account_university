import React from "react";

import Postitem from "./Postitem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function Postlist({ posts, title, removePost }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Пусто</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            nodeRef={post.nodeRef}
            timeout={500}
            classNames="posts"
          >
            <Postitem
              removePost={removePost}
              number={index + 1}
              post={post}
              ref={post.nodeRef}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
