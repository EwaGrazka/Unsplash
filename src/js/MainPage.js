import React from "react";
import Finder from "./Finder";
import "../scss/MainPage.scss";

function MainPage() {
  return (
    <div className="mainWrapper">
      <div>
        <div className="titleWrapper">
          <h1>Unsplash</h1>
          <h3>The internet source of freely-usable images.</h3>
          <h3>Powered by creators everywhere.</h3>
        </div>
        <Finder />
        <h5>Trending: flower, wallpapers, backgrounds, happy, love</h5>
      </div>
    </div>
  );
}
export default MainPage;
