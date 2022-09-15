import React, { useState } from "react";
import Reply from "./Reply";

export default function Comment(props) {
  const [like, setLike] = useState(props.likeNum);
  const [havelike, sethavelike] = useState(false);
  const comments = [props.comments];

  const handleClick = () => {
    setLike(like++);
    if (like > 0) {
      sethavelike(true);
    } else {
      sethavelike(false);
    }
  };

  return (
    <div>
      {/* Entire Comment div */}
      <div className="d-flex gap-2 my-2">
        <img
          src={props.img}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            {props.username}
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>{props.comment}</span>
          <button
            onClick={handleClick}
            className="d-flex align-items-center gap-1"
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <img src="/like.svg" width={20}></img>

            <span
              className={havelike ? "d-block" : "d-none"}
              style={{ color: "#B0B3B8" }}
            >
              {like} คน
            </span>
          </button>
        </div>
      </div>
      <div>
        {props.replies.map((x, i) => {
          <Reply
            key={i}
            username={x.username}
            img={x.userImagePath}
            replyText={x.replyText}
            likeNum={x.likeNum}
          />;
        })}
      </div>
    </div>
  );
}
