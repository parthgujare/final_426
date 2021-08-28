import React, { useState, useEffect } from "react";
import app from "firebase";
import Navbar from "./Navbar.js";
import Newsfeed from "./Newsfeed";
import Weather from "./Weather";
import Joke from "./Joke";
import Compliment from "./Compliment";
import Covid from "./Covid";

export default function Home() {
  return (
    <div className="content">
      <Navbar />
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Home</p>
          <p className="subtitle">
            spring-2021-comp426-final-project | Made with React, react-router,
            Firebase, and Bulma
          </p>
        </div>
      </section>
      <div className="container section">
        <article className="message is-primary block">
          <div className="message-header">
            <p>University of North Carolina at Chapel Hill</p>
          </div>
          <div className="message-body">
            <Weather />
          </div>
        </article>
        <Joke />
        <Compliment />
        <Covid />
      </div>
    </div>
  );
}
