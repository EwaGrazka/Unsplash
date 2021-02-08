import React, { useState } from "react";
import "../scss/Modal.scss";

function Modal(props) {
  const { photoId } = props;

  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");

  fetch(
    `https://api.unsplash.com/photos/${photoId}?client_id=jDbtQg1MmInd9TCKgJBQDwREA4fpVrRKhomN4ekVhBs`,
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
        setImage(result.urls.regular);
        setLocation(result.user.location);
        setName(result.user.name);
      },
      (error) => {
        console.log(error, "errors");
      }
    );
  return (
    <>
      <div className="modalBackground" onClick={() => props.closeModal()}>
        <div className="modalWrapper">
          <span className="x" onClick={() => props.closeModal()}>
            x
          </span>
          <div className="name">{name ? name : null}</div>
          <div className="image">{image ? <img src={image}></img> : null}</div>
          <div className="location">{location ? location : null}</div>
        </div>
      </div>
    </>
  );
}
export default Modal;
