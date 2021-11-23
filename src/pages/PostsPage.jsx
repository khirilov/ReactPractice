import React, { useState, useEffect } from "react";
import { PostList } from "../components/PostList.jsx";
import { PostForm } from "../components/PostForm.jsx";
import { PostFilter } from "../components/PostFilter.jsx";
import { ModalWin } from "../components/ModalWin.jsx";
import { usePosts } from "../hooks/usePosts.jsx";
import { Preloader } from "../components/Preloader.jsx";
import { PageButtons } from "../components/PageButtons.jsx";

function PostsPage() {
  const [array, setArray] = useState([]);
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
  const [isActive, setActive] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoad, setIsLoad] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const resultSortedSearch = usePosts(filter.query, array, filter.sort);
  const createPost = (newPost) => {
    setArray([...array, newPost]);
    setActive(false);
  };
  const deletePost = (post) => {
    setArray(array.filter((el) => el.id !== post.id));
  };

  useEffect(() => {
    setIsLoad(true);
    fetchPosts(limit, page);
  }, [page]);

  const fetchPosts = (limit, page) => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    )
      .then((response) => {
        const totalCount = response.headers.get("x-total-count");
        setTotalPages(Math.ceil(totalCount / limit));
        return response.json();
      })
      .then((data) => {
        setArray(data);
        setIsLoad(false);
      });
  };

  return (
    <div className="container">
      <ModalWin isActive={isActive} setActive={setActive}>
        <PostForm create={createPost} />
      </ModalWin>
      <PostFilter filter={filter} setFilter={setFilter} />
      <button className="btn" onClick={() => setActive(true)}>
        Create Post
      </button>
      {isLoad ? (
        <Preloader />
      ) : (
        <PostList array={resultSortedSearch} delPost={deletePost} />
      )}
      <PageButtons setPage={setPage} totalPages={totalPages} />
    </div>
  );
}

export { PostsPage };
