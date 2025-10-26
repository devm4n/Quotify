import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Quotes from "./components/Quotes";
import { CommentContext } from "./contexts/CommentContext";

function App() {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const {commentData,quoteData} = useContext(CommentContext)
  console.log(commentData,quoteData)
  return (
    <>
      <div className="main bg-zinc-200 pb-12">
        <div className="hero pb-12 flex justify-center px-4 sm:px-12 md:px-24 lg:px-48 pt-24 md:pt-48 items-center">
          <div className="flex flex-col items-center">
            <h4
              className="text-4xl md:text-7xl text-zinc-800 py-8"
              style={{ fontFamily: "'Jersey 15', cursive" }}
            >
              Welcome to Quotify.
            </h4>
            {!isMobile && (
              <p
                className="px-2 sm:px-8 md:px-16 text-zinc-800 lg:px-24 text-sm md:text-lg text-center"
                style={{ fontFamily: "'Jersey 20', cursive" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium itaque quasi laudantium iure ducimus aliquid,
                asperiores, odio sed nulla, at temporibus harum. Autem optio qui
                esse inventore ipsum perferendis, rerum architecto blanditiis
                amet, dolores delectus quibusdam quas provident laboriosam
                suscipit illo? Qui placeat ipsum consequatur vitae, facilis hic
                inventore cumque unde, nisi necessitatibus dolores voluptates
                harum!
              </p>
            )}
          </div>
        </div>
        {/* Add horizontal margin or padding to hr using Tailwind classes */}
        <hr className="mx-8 md:mx-24" />
        <div className="content pt-8 px-4 flex justify-center text-zinc-800">
          <div className="w-full max-w-xl flex flex-col items-center gap-6">

            {Array.isArray(quoteData) &&
              quoteData.map((element, idx) => (
                <Quotes key={idx} quoteData={element} commentData={commentData} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
