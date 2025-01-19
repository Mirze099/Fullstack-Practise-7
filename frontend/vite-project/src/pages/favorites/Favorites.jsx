import React, { useContext } from "react";
import { favoriteContext } from "../../context/FavoriteContext";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Favorites() {
  let { favorites, setFavorites } = useContext(favoriteContext);
  function handleDeleteFav(id) {
    let filteredFav = favorites.filter((item) => item._id !== id);
    setFavorites(filteredFav);
  }
  return (
    <div className="mains">
      {favorites.length == 0 ? (
        <h1>Sizin Favoritiniz Bosdur</h1>
      ) : (
        <div className="featureCards">
          {favorites.map((fav) => (
            <div className="featureCard">
              <div className="featureCardImg">
                <img src={fav.img} alt="" />
              </div>
              <div className="featureCardInfo">
                <h1>{fav.name}</h1>
                <p>{fav.desc}</p>
                <IconButton onClick={() => handleDeleteFav(fav._id)}>
                  <FavoriteIcon className="featureCardInfoIcon" />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
