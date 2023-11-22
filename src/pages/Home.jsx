import axios from "axios";
import React, { useEffect, useState } from "react";
import { catOptions } from "../catOptions";
import { useAlert } from "react-alert";
// require('dotenv').config()

const Home = () => {
  const [catsData, setCatsData] = useState([]);
  const alert = useAlert();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    try {
      axios
        .get(
          "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=6",
          catOptions
        )
        .then((response) => setCatsData(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleGenerateCats = () => {
    fetchData();
  };

  const addToFavorites = (id, indx) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.REACT_APP_API_KEY,
      },
    };
    const payload = { image_id: id, sub_id: "my-user-1" };
    try {
      axios
        .post("https://api.thecatapi.com/v1/favourites", payload, options)
        alert.success("Cat Liked");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="main-container">
      <div className="image-grid">
        {catsData.map((cat, indx) => (
          <div key={indx} className="image-button-pair">
            <img src={cat.url} alt="" className="grid-image" />
            <button
              onClick={() => addToFavorites(cat.id, indx)}
              className="grid-button"
            >
              <span className="material-symbols-outlined navnar-icons">
                favorite
              </span>
            </button>
          </div>
        ))}
      </div>
      <div className="main-container-description">
        <div>
          <h2 className="main-container-title">Cat generator</h2>
          <div className="main-container-text">
            Pres the button below ti generate new images
          </div>
          <button
            onClick={handleGenerateCats}
            className="main-container-button"
          >
            Randomize
          </button>
        </div>
      </div>
      {/* <div className="hint">Cat added to favorites</div> */}
    </section>
  );
};

export default Home;
