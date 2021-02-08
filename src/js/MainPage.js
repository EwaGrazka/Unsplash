import React from "react";
import Finder from "./Finder";
import "../scss/MainPage.scss";
import Result from "./Result";

function MainPage(props) {
  return (
    <div className="mainWrapper">
      <div className="titleWrapper">
        <h1>Unsplash</h1>
        <h3>The internet source of freely-usable images.</h3>
        <h3>Powered by creators everywhere.</h3>
      </div>
      <Finder results={props.results} change={props.change} />
      <h5>Trending: flower, wallpapers, backgrounds, happy, love</h5>
    </div>
  );
}
export default MainPage;
