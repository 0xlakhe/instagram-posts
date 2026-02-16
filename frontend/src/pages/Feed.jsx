import React from "react";
import { useState } from "react";

const Feed = () => {
  const [post, setPost] = useState([
    {
      __id: 1,
      image:
        "https://ik.imagekit.io/x4ymz93d9/image_EiC_goBhK.jpg?updatedAt=1771246802090",
      caption: "Hello",
    },
    {
      __id: 2,
      image:
        "https://ik.imagekit.io/x4ymz93d9/image_EiC_goBhK.jpg?updatedAt=1771246802090",
      caption: "Hello",
    },
    {
      __id: 3,
      image:
        "https://ik.imagekit.io/x4ymz93d9/image_EiC_goBhK.jpg?updatedAt=1771246802090",
      caption: "Hello",
    },
    {
      __id: 4,
      image:
        "https://images.unsplash.com/photo-1771183262507-62916a29ea63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      caption: "Hello",
    },
  ]);
  return (
    <div className="p-13 overflow-scroll">
      <h1 className="mb-7 text-center font-bold text-2xl">Posts</h1>
      {post.length > 0 ? (
        post.map((item) => {
          return (
            <div className="flex  justify-center" key={item.__id}>
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
