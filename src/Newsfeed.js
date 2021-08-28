import React from "react";
import axios from "axios";
import News from "./News";
import Navbar from "./Navbar";

const { useState } = React;

export default function Newsfeed() {
  const [newstories, setNewstories] = useState([]);

  async function fetchNews() {
    const result = await axios({
      method: "get",
      url: "https://newsapi.org/v2/everything?q=dogecoin&from=2021-08-01&sortBy=publishedAt&apiKey=9bb30c9270fa4f91b1faa9b3a8e322ae",
    });

    setNewstories(result.data.articles);
  }

  if (newstories.length == 0) {
    fetchNews();
  }

  return (
    <div className="">
      <Navbar />
      <h1 className="section">Dogecoin News</h1>
      <div className="columns is-multiline section">
        {newstories.map((n) => (
          <News story={n} />
        ))}
      </div>
    </div>
  );
}
