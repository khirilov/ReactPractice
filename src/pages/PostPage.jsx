import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Preloader } from "../components/Preloader.jsx";

const PostPage = () => {
  const params = useParams();
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
      });
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        console.log(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <h1>This is Post page with id {result.id}</h1>
          <div>{result.body}</div>
          <h3>Comments</h3>
          <div>
            {comments.map((com) => {
              return (
                <div key={com.id}>
                  <h5>{com.email}</h5>
                  <p>{com.body}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
export { PostPage };
