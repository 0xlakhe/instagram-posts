import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Feed = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPost(res.data.data);
    });
  }, []);
  return (
    <div className="p-13 overflow-scroll">
      <h1 className="mb-7 text-center font-bold text-2xl">Posts</h1>
      {post.length > 0 ? (
        post.map((item) => {
          return (
            <div className="flex  justify-center" key={item._id}>
              <div className="w-100% h-full rounded-xl object-covers">
                <img
                  src={item.image}
                  alt="no image"
                  className=" rounded-2xl shadow-2xl"
                />
                <p className="text-xl pt-5 mb-10">{item.caption}</p>
              </div>
            </div>
          );
        })
      ) : (
        <h1>No post available</h1>
      )}
    </div>
  );
};

export default Feed;
