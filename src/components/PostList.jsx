import React from "react";
import { Post } from "./Post.jsx";

function PostList({ array, delPost }) {
  if (!array.length) {
    return <h3>Didnt found any posts</h3>;
  }

  return (
    <>
      <h1>Post List</h1>
      {array.map((el, index) => {
        return <Post key={el.id} {...el} delPost={delPost} />;
      })}
    </>
  );
}

export { PostList };
