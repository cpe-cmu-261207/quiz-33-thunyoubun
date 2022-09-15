import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";

export default function Home() {
  comments.map((x, i) => {
    x.commentText;
    x.likeNum;
    x.replies;
    x.userImagePath;
    x.username;
  });

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* PostOwner Example*/}
        <PostOwner name="Thun Anuntart" id="620610589" />

        {/* Comment Example */}
        {comments.map((x, i) => {
          <Comment
            key={i}
            username={x.username}
            img={x.userImagePath}
            comment={x.commentText}
            replies={x.replies}
            likeNum={x.likeNum}
          />;
        })}

        {/* Reply Example */}
      </div>
    </div>
  );
}
