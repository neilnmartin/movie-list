import React from "react";

import style from "./MovieList.css";

export default function MovieListItem({ item }) {
  const { title, overview, vote_average, poster_path } = item;
  return (
    <div>
      <img
        className={style.posterImg}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      />
      <div>{title}</div>
      <div>{overview}</div>
      <div>{vote_average}</div>
    </div>
  );
}
