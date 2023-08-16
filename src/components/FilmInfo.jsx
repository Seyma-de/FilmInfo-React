import React from "react";
import { Rating } from "react-simple-star-rating";

const FilmInfo = ({ selectDate, data }) => {
  const selectedFilm = data.filter((film) => film.date === selectDate)[0];
  if (!selectedFilm) {
    return (
      <p className="container animasyon text-start fw-bolder text-info">
        lütfen bir tarih seciniz
      </p>
    );
  }
  return (
    <div className="m-auto p-3">
      <h3 className="text-info">{selectedFilm.title}</h3>
      <p className="fs-5">{selectedFilm.body}</p>
      <p className="text-danger">{selectedFilm.tags.join("/")}</p>
      <div className="d-flex align-items-center">
        <Rating stars={5} size={20} />
        <p className="text-danger fs-4 mt-3 ms-2">{selectedFilm.rate}/10</p>
      </div>
    </div>
  );
};

export default FilmInfo;
