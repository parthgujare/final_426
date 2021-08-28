import React from "react";
import axios from "axios";

const { useState } = React;
export default function Joke() {
  const [joke, setJoke] = useState("");

  const jokeFetch = async () => {
    let result = await axios({
      method: "get",
      url: "https://official-joke-api.appspot.com/random_joke",
    });

    setJoke(result.data);
  };

  if (joke === "") {
    jokeFetch();
  }

  return (
    <article className="message is-primary block">
      <div className="message-header">
        <p>{joke.setup}</p>
        <button
          className="button is-primary"
          onClick={() => {
            jokeFetch();
          }}
        >
          New Joke
        </button>
      </div>
      <div className="message-body">
        <div>{joke.punchline}</div>
      </div>
    </article>
  );
}
