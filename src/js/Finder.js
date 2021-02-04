import React from "react";
git;
import "../scss/Finder.scss";

function Finder() {
  return (
    <form
      //   onSubmit={handleSubmit}
      className="form"
    >
      <div className="searchInputWrapper">
        <i className="fas fa-search"></i>
        <input
          // onChange={handleChange}
          type="search"
          name="photo"
          placeholder="Search free high-resolution photos"
        />
      </div>
    </form>
  );
}
export default Finder;
