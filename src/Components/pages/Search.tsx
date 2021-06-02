import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../AppProviderTSX";
import { HttpFetch } from "../../Helpers/HttpFetch.js";
import Cards from "../shared/Cards.js";
import "./Search.css";

import notFound from "../../assets/images/NotFoundImage.png";

export default function Search() {
  const { episode, setEpisode } = useContext(AppContext);
  

  console.log("episode", episode);

  let load;
  if (episode.id !== undefined) {
    load = (
      <Cards
        episodeName={episode.name}
        image={`https://rickandmortyapi.com/api/character/avatar/${episode.id}.jpeg`}
        date={episode.air_date}
        key={episode.id}
      ></Cards>
    );
  } else {
    load = (
      <div className="notFoundContainer">
        <img src={notFound} alt="notFound"></img>
        <span>Not Found</span>
      </div>
    );
  }

  return <div className="ContainerSearch">{load}</div>;
}
