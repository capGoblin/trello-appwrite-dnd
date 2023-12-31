"use client";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import trelloImg from "@/public/Trello-Logo.png";
import { useBoardStore } from "@/store/BoardStore";
import { fetchSuggestions } from "@/lib/fetchSuggestion";

const Header = () => {
  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
  ]);

  // const [loading, setLoading] = useState<boolean>(false);
  // const [suggestion, setSuggestion] = useState<string>("");

  // useEffect(() => {
  //   if (board.columns.size === 0) return;
  //   setLoading(true);

  //   const fetchSuggestionsFn = async () => {
  //     const suggestions = await fetchSuggestions(board);
  //     setSuggestion(suggestions);
  //     setLoading(false);
  //   };

  //   // fetchSuggestionsFn();
  // }, []);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-violet-400 to-[#e8f6ff] rounded-md filter blur-3xl opacity-50 -z-50" />
        <Image
          src={trelloImg}
          alt="Trello logo"
          height={80}
          width={240}
          className="w-40 md:w-48 pb-5 pl-2 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />

            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="button" hidden></button>
          </form>
          <Avatar name="HeyHey" round size="44" color="#0055D1" />
        </div>
      </div>

      {/* <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center p-5 text-sm font-light shadow-xl rounded-xl w-fit bg-white italic max-w-3xl">
          <UserCircleIcon
            className={`inline-block h-10 w-10 text-[#0055D1] mr-1 ${
              loading && "animate-spin"
            }`}
          />
          {suggestion && !loading
            ? suggestion
            : "GPT is summarising your tasks for the day..."}
        </p>
      </div> */}
    </header>
  );
};

export default Header;
