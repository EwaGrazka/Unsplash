import React from "react";
import Finder from "./Finder";
import "../scss/Result.scss";

function Result(props) {
  const { resultsPhotos } = props;
  return (
    <div className="resultWrapper">
      <div className="finderWrapper">
        <Finder change={props.change} results={props.results} />
      </div>
      <div className="photosWrapper">
        <div className="photos">
          {resultsPhotos
            ? resultsPhotos.map((photo) => (
                <div class="photoWrapper">
                  <img
                    className="photo"
                    key={photo.id}
                    src={photo.urls.regular}
                  ></img>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
export default Result;
