import React from "react";
import axios from "axios";

const { useState } = React;
export default function Compliment() {
  const [Compliment, setCompliment] = useState("");

  const ComplimentFetch = async () => {
    let result = await axios({
      method: "get",
      url: "https://complimentr.com/api",
    });

    setCompliment(result.data);
  };

  if (Compliment === "") {
    ComplimentFetch();
  }

  return (
    <article className="message is-primary block">
      <div className="message-header">
        <p>---------------------------------------------------></p>
        <button
          className="button is-primary"
          onClick={() => {
            ComplimentFetch();
          }}
        >
          New Compliment
        </button>
      </div>
      <div className="message-body">
        <div>{Compliment.compliment}</div>
      </div>
    </article>
  );
}
