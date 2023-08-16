import { useState } from "react";
import "./Film.css";
import FilmInfo from "./FilmInfo";

const FilmYear = ({ data }) => {
  const [secilenTarih, setSecilenTarih] = useState(null);
  const handleClick = (tarih) => {
    setSecilenTarih(tarih);
  };
  return (
    <div className="container shadow p-3 mb-5 rounded-2">
      <div className="d-flex">
        <div className="list">
          {data.map((tarih) => (
            <div key={tarih.id}>
              <button
                className="button mb-3 me-3 p-1 w-100 fs-5 fw-bold shadow border-white bg-secondary-subtitle rounded-2"
                onClick={() => handleClick(tarih.date)}
              >
                {tarih.date}
              </button>
            </div>
          ))}
        </div>
        <div className="container">
          <FilmInfo selectDate={secilenTarih} data={data} />
        </div>
      </div>
    </div>
  );
};

export default FilmYear;
