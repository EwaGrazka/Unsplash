import React from "react";
import "../scss/Finder.scss";

function Finder(props) {
  const { results, change } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    results();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="searchInputWrapper">
          <i className="fas fa-search"></i>
          <input
            onChange={(e) => change(e)}
            type="search"
            name="photo"
            placeholder="Search free high-resolution photos"
          />
        </div>
      </form>
    </>
  );
}

export default Finder;
