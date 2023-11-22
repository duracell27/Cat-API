import axios from "axios";
import React, { useEffect, useState } from "react";
import { catOptions, catOptionsDelete } from "../catOptions";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);
  const fetchFavorites = () => {
    try {
      axios
        .get("https://api.thecatapi.com/v1/favourites", catOptions)
        .then((response) => setFavorites(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromFavorites = (id) => {
    try {
        axios
          .delete(`https://api.thecatapi.com/v1/favourites/${id}`, catOptionsDelete).then(()=>fetchFavorites())
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <section className="main-container-favorits">
        <h1>Favorite cats</h1>
      <div className="image-grid">
        {favorites.map((cat, indx) => (
          <div key={indx} className="image-button-pair">
            <img src={cat.image.url} alt="" className="grid-image" />
            <button
            onClick={() => removeFromFavorites(cat.id)}
              className="grid-button"
            >
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
// my - user - 1;
export default Favorites;
