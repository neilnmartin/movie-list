import React from "react";

export default function MovieListItem({ item }) {
  const { title, overview, vote_average, poster_path } = item;
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      <div>{title}</div>
      <div>{overview}</div>
      <div>{vote_average}</div>
    </div>
  );
}
