import React from "react";
import axios from "axios";

const { useState } = React;

export default function Covid() {
  const [covid, setCovid] = useState([]);

  const fetchCovid = async () => {
    let result = await axios({
      method: "get",
      url: "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true",
    });

    setCovid(result.data.filter((data) => data.country === "United States")[0]);
  };

  if (covid.length === 0) {
    fetchCovid();
  }
  return (
    <div className="tile is-ancestor">
      <div className="tile is-parent is-vertical">
        <div className="tile is-child box has-background-danger">
          <p className="title has-text-primary-light">US Covid Deathcount</p>
          <p className="has-text-primary-light">{covid.deceased}</p>
        </div>
        <div className="tile is-child box has-background-info">
          <p className="title has-text-primary-light">US Covid Infected</p>
          <p className="has-text-primary-light">{covid.infected}</p>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box has-background-primary">
          <p className="title has-text-primary-light ">
            United States Covid Dashboard
          </p>
          <img src="https://gray-whsv-prod.cdn.arcpublishing.com/resizer/1M8y90cy7ije6VPS-rKUMsuD9Q8=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/JHKJRQICBZD65JM6TRG2WDIW6U.jpg" />
        </div>
      </div>
    </div>
  );
}
