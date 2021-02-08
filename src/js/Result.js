import React, { useState } from "react";
import Finder from "./Finder";
import "../scss/Result.scss";
import Modal from "./Modal";

function Result(props) {
  const { resultsPhotos } = props;

  const [modal, setModal] = useState(false);
  const [photoId, setPhotoId] = useState("");

  const handleOpenModal = (id) => {
    setPhotoId(id);
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
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
    </div>
  );
}
export default Result;
