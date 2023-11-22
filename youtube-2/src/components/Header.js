import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { search_api } from "../utils/constants";

const Header = () => {
  const [seachQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  useEffect(() => {
    // getSearchSuggestions()
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    //make an api call after evry every press
    //but if the difference between 2 api call is less than 200ms
    //declain the api call
  }, [seachQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(search_api + seachQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log(json[1]);
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          alt="menu"
          className="h-6 cursor-pointer  text-center"
          onClick={() => toggleMenuHandler()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
        />
        <img
          alt="youtube-logo"
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
        />
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            type="search"
            placeholder="Search"
            value={seachQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          />
          <button className="border border-gray-500 p-2 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 w-[32rem] rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-7"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        />
      </div>
    </div>
  );
};

export default Header;
