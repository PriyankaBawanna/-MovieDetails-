import React, { useEffect, useState } from "react";
import "../Style/movieStyle.css";
import PagginationDemo from "./Paggination";
const MovieDemo = () => {
  const [user, setUser] = useState([]);
  const [userInput, setSearchInput] = useState("");
  const [repo, setRepo] = useState([]);

  const getUser = async () => {
    console.log("chechk user input", userInput);
    const response = await fetch(
      `https://fake-movie-database-api.herokuapp.com/api?s=${userInput}`
    );

    const parsedResponseRepo = await response.json();
    console.log("Checking Parsed Repo Response", parsedResponseRepo);
    setUser(parsedResponseRepo.Search);
  };

  const [showPerPage, setPosts] = useState(3);
  const [paggination, setPaggination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    setPaggination({ start: start, end: end });
  };

  const _renderRepo = () => {
    return user
      .slice(paggination.start, paggination.end)
      .map((item: any, index: any) => {
        return (
          <div className="UserRepo col-md-2">
            <p key={item.imdbID}>
              <b>Movie_id:</b> {item.imdbID}
            </p>
            <p key={item.Title}>
              <b>Movie_id:</b> {item.Title}
            </p>
            <p key={item.Title}>
              <b>Movie_id:</b> {item.Title}
            </p>
          </div>
        );
      });
  };

  return (
    <>
      <h1>Movies Details</h1>
      <div className="inputsection">
        <input
          className="inputMoviesName"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>
        <button className="btn" onClick={getUser}>
          Search Movies
        </button>
      </div>
      <div className="list_repo">{_renderRepo()}</div>
      <PagginationDemo
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
      />
    </>
  );
};
export default MovieDemo;
