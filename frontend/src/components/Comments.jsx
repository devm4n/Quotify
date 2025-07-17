import React from "react";
import { RiAddFill } from "@remixicon/react";

function Comments({ commentData }) {
  return (
    <>
      <div className="main">
        <div className="comments-list flex-col justify-between gap-2 items-center">
          {commentData.map((comment, index) => (
            <div
              key={index}
              className="comment border-b-2  border-zinc-300 py-2 px-4"
              style={{ fontFamily: "'Jersey 15', cursive" }}
            >
              <p className="text-zinc-800">{comment.comment}</p>
            </div>
          ))}
        </div>
        <br />
        <div
          className="input relative bottom-1 pt-4 flex justify-center p-2 w-96 items-center "
          style={{ fontFamily: "'Jersey 15'" }}
        >
          <input
            className="border-2 focus:outline-none border-zinc-400 rounded-md p-1 w-full"
            type="text"
            placeholder="Add Your Thought."
          />
          <button
            type="submit "
            className="flex items-center justify-center p-1 ml-2 bg-zinc-700 rounded-md"
          >
            <RiAddFill className="inline text-zinc-100 rounded-md" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Comments;
