import React from "react";
import { PostProps } from "../../types/types";

const PostCard = ({ title, body }: PostProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
