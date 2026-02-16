import React from "react";

const CreatePost = () => {
  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="p-10 bg-zinc-800 min-h-screen">
      <form
        onSubmit={submitHandler}
        className="mt-20 flex flex-col gap-5 bg-gray-500 rounded-xl p-3 shadow-2xl"
      >
        <legend>Create Post</legend>
        <input
          type="file"
          name="image"
          accept="image/*"
          required
          className="border rounded-2xl p-10 cursor-pointer"
        />
        <input
          type="text"
          name="caption"
          placeholder="Enter caption"
          className="border w-full p-2  rounded-xl"
        />
        <input
          type="submit"
          className="border w-fit m-auto px-4 py-2 rounded-xl cursor-pointer"
        />
      </form>
    </div>
  );
};

export default CreatePost;
