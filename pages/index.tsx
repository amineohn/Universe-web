import type { NextPage } from "next";
import React from "react";
const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center space-y-2">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-yellow-400 select-none">
            Universe
          </h1>
          <p className="text-xl font-light text-white">
            A simple bot that will help you to manage your Discord server.
          </p>
          <button className="bg-transparent text-white hover:text-yellow-200 font-semibold py-2 px-4 border border-white hover:border-yellow-200 hover:border-transparent rounded">
            Get started with the bot
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
