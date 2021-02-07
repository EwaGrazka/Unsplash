import React, { useState } from "react";
import "../scss/Finder.scss";

function Finder() {
  const [photo, setPhoto] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://api.unsplash.com/search/photos?page=1&query=" +
        photo +
        "&client_id=" +
        "jDbtQg1MmInd9TCKgJBQDwREA4fpVrRKhomN4ekVhBs",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept-Version": "v1",
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          // setItems(result);
          console.log(result, "result");
          setResults(result.results);
        },

        (error) => {
          // setIsLoaded(true);
          // setError(error);
          console.log(error, "errors");
        }
      );
  };
  const handleChange = (e) => {
    // setPhoto(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="searchInputWrapper">
          <i className="fas fa-search"></i>
          <input
            onChange={handleChange}
            type="search"
            name="photo"
            placeholder="Search free high-resolution photos"
          />
        </div>
      </form>
      <div className="photosWrapper">
        {results
          ? results.map((photo) => (
              <figure>
                <img
                  className="photo"
                  key={photo.id}
                  src={photo.urls.regular}
                ></img>
              </figure>
            ))
          : null}
      </div>
    </>
  );
}

export default Finder;
