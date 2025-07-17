import { RiChatQuoteFill } from "@remixicon/react";
import Comments from "./Comments";
import { useState } from "react";
function Quotes({ quoteData, commentData }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="card border-zinc-600 border-2 rounded-md py-8 p-8 flex flex-col w-full">
        <div
          className="quote text-2xl text-zinc-800 font-semibold mb-4"
          style={{ fontFamily: "'Jersey 15', cursive" }}
        >
          {quoteData.quote}
        </div>
        <div
          className="author text-lg mb-4"
          style={{ fontFamily: "'Jersey 15', cursive" }}
        >
          - {quoteData.author}
        </div>
        <hr className="mx-2 md:mx-2" />

        <div className="flex w-full items-center pt-4 gap-6 justify-between">
          <div className="votes flex items-center gap-2">
            <span className="text-zinc-600 font-bold">
              <button>▲</button>
            </span>
            <span
              className="font-mono text-lg"
              style={{ fontFamily: "'Jersey 15', cursive" }}
            >
              {quoteData.votes}
            </span>
            <span className="text-zinc-600 font-bold">
              <button>▼</button>
            </span>
          </div>
          <div className="comments w-full flex flex-col items-end">
           
            <span>
              <button onClick={() => setExpanded(!expanded)}>
                <RiChatQuoteFill className="inline mx-1 text-zinc-700" />
                <span
                  className="font-mono text-lg"
                  style={{ fontFamily: "'Jersey 15', cursive" }}
                >
                  {commentData.length}
                </span>
              </button>
            </span>
          </div>
        </div>
            <div className="input inherit w-full flex justify-center items-center">
              <div
                className={`overflow-hidden flex items-center  transition-all duration-500 ease-in-out ${
                  expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <Comments className="absolute inset-0 inline" commentData={commentData}  />
              </div>
            </div>
      </div>
    </>
  );
}

export default Quotes;
