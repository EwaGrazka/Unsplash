import React, { useState, useEffect } from "react";
import Finder from "./Finder";
import "../scss/Result.scss";
import Modal from "./Modal";
import ReactPaginate from "react-paginate";

function Result(props) {
  const { resultsPhotos } = props;

  const [modal, setModal] = useState(false);
  const [photoId, setPhotoId] = useState("");
  const [paginatedPhotos, setPaginatedPhotos] = useState(null);
  const [newSearch, setNewSearch] = useState(null);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    if (props.resultsPhotos) {
      setPaginatedPhotos(props.resultsPhotos);
    }
  });

  const handleOpenModal = (id) => {
    setPhotoId(id);
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  const handleMoreImages = () => {
    fetch(
      "https://api.unsplash.com/search/photos?page=" +
        pageCount +
        "3&per_page=30&query=" +
        props.query +
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
          setNewSearch(result.results);
          setPageCount(pageCount + 1);
        },

        (error) => {
          console.log(error, "errors");
        }
      );
  };

  return (
    <div className="resultWrapper">
      <div className="finderWrapper">
        <Finder change={props.change} results={props.results} />
      </div>
      <div className="photosWrapper">
        <div className="photos">
          {newSearch
            ? newSearch.map((photo) => (
                <div class="photoWrapper">
                  <img
                    onClick={() => handleOpenModal(photo.id)}
                    className="photo"
                    key={photo.id}
                    src={photo.urls.regular}
                  ></img>
                </div>
              ))
            : paginatedPhotos
            ? paginatedPhotos.map((photo) => (
                <div class="photoWrapper">
                  <img
                    onClick={() => handleOpenModal(photo.id)}
                    className="photo"
                    key={photo.id}
                    src={photo.urls.regular}
                  ></img>
                </div>
              ))
            : null}
        </div>
      </div>
      {modal ? <Modal photoId={photoId} closeModal={handleCloseModal} /> : null}
      {resultsPhotos ? (
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={props.totalResults / 30}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={() => handleMoreImages()}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      ) : null}
    </div>
  );
}
export default Result;
