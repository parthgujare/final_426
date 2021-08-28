import React from "react";

const { useState } = React;
export default function News(props) {
  return (
    <div className="card block column is-one-quarter">
      <div class="card-image block">
        <figure className="image is-100x100">
          <img src={props.story.urlToImage} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title">{props.story.title}</p>
          <p className="subtitle">{props.story.author}</p>
        </div>
      </div>

      <div className="card-content">
        <p>{props.story.description}</p>
        <time>{props.story.publishedAt}</time>
      </div>
    </div>
  );
}
