import React, { useState } from "react";

function PostForm({ create }) {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <input
        value={post.title}
        placeholder="title"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <input
        value={post.body}
        placeholder="description"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <button onClick={addNewPost}>Create</button>
    </form>
  );
}

export { PostForm };
