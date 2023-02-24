import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyDLje_csHwVObrDym6dRLl8boxFab2Z5G8" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A Room without Books is like
            <br /> a Body without a Soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button
            >
              <i class="fas fa-search" value={search}></i>
              
            </button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
};

export default Main;
