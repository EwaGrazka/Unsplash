import MainPage from "./js/MainPage";
import { Route, HashRouter, Redirect, Router } from "react-router-dom";
import Result from "./js/Result";
import React, { useState } from "react";
import { useHistory } from "react-router";

function App(props) {
  const [results, setResults] = useState(null);
  const [photo, setPhoto] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const history = useHistory();

  const handleResults = (props) => {
    fetch(
      "https://api.unsplash.com/search/photos?page=1&per_page=30&query=" +
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
          setResults(result.results);
          setTotalResults(result.total);
        },
        (error) => {
          console.log(error, "errors");
        }
      );
    setRedirect(true);
  };

  const handleChange = (e) => {
    setPhoto(e.target.value);
  };

  return (
    <div className="App">
      <HashRouter>
        <Route
          exact
          path="/"
          render={(props) => (
            <MainPage
              {...props}
              results={handleResults}
              change={handleChange}
            />
          )}
        />
        <Route
          exact
          path="/result"
          render={(props) => (
            <Result
              {...props}
              resultsPhotos={results}
              change={handleChange}
              results={handleResults}
              totalResults={totalResults}
              query={photo}
            />
          )}
        />
      </HashRouter>
      {redirect ? (
        <HashRouter>
          <Redirect to={"/result"} />
        </HashRouter>
      ) : null}
    </div>
  );
}

export default App;
