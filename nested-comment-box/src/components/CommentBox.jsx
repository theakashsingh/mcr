import React, { useState } from "react";

const CommentBox = ({ comments,handleCommentReply }) => {
  const [takeComment, setTakeComment] = useState("")
  
  const handleComment = (e,id) =>{
        if (e.key==="Enter") {
           handleCommentReply(id,takeComment,'me')
        }
  }
  return (
    <div className="comment-container">
      {comments.map(comment => (
        <div className="comment-box" key={comment.id}>
          <div className="comment">
          <span>{comment.name}@➡️</span>
          <span>{comment.comment}</span>
          <input placeholder="Reply" type="text" onChange={(e)=>setTakeComment(e.target.value)} onKeyDown={(e)=>handleComment(e,comment.id)}/>
          </div>
          {comment.children && <CommentBox comments={comment.children}  handleCommentReply={handleCommentReply}/>}
        </div>
      ))}
    </div>
  );
};

export default CommentBox;
