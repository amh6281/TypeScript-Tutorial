import React from "react";
import PostCard from "../PostCard/PostCard";
import { PostProps } from "../../types/types";

const PostList = () => {
  const data: PostProps[] = [
    {
      id: 1,
      title: "title1",
      body: "body1",
    },
    {
      id: 2,
      title: "title2",
      body: "body2",
    },
    {
      id: 3,
      title: "title3",
      body: "body3",
    },
  ];
  return (
    <div>
      {data.map((post: PostProps) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
