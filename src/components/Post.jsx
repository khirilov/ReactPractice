import { useHistory } from "react-router-dom";

function Post(props) {
  const router = useHistory();

  return (
    <div className="post">
      <div className="post_content">
        <strong>
          <span>{props.id}. </span>
          {props.title}
        </strong>
        <p>{props.body}</p>
      </div>
      <div className="post_action">
        <button
          className="btn"
          onClick={() => router.push(`/posts/${props.id}`)}
        >
          Open
        </button>
        <button className="btn" onClick={() => props.delPost(props)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export { Post };
