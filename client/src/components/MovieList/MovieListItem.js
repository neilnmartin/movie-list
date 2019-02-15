import React from "react";

export default function MovieListItem({ item }) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
      <div>{item.title}</div>
      <div>{item.overview}</div>
      <div>{item.vote_average}</div>
    </div>
  );
}
