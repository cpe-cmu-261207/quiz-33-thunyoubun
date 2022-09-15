import React, { useState } from "react";

export default function Reply(props) {
  const [like, setLike] = useState(props.likeNum);
  const [havelike, sethavelike] = useState(false);

  const handleClick = () => {
    setLike(like++);
  };

  useEffect(() => {
    if (like > 0) {
      sethavelike(true);
    } else {
      sethavelike(false);
    }
  });
  return (
    <div>
      <div className="d-flex gap-2 my-2 ps-5">
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
          <span style={{ color: "#E4E6EB" }}>{props.replyText}</span>
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
    </div>
  );
}
