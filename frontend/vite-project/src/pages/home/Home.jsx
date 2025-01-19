import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import axios from "axios";
import { favoriteContext } from "../../context/FavoriteContext";
import Swal from "sweetalert2";

export default function Home() {
  const [data, setData] = useState([]);
  let { favorites, setFavorites } = useContext(favoriteContext);

  async function getData() {
    try {
      let res = await axios.get("http://localhost:3000/product/");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function handleAddFav(id) {
    let findedFav = data.find((item) => item._id == id);
    let isExist = favorites.find((item) => item._id == findedFav._id);
    if (isExist) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Bu mehsul sizin favoritinizde movcuddur",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else {
      setFavorites([...favorites, findedFav]);
    }
  }

  return (
    <div>
      <div className={`${styles.hero}`}>
        <h1>
          Episode 09: How To Create
          <br />
          Web Page Using Bootstrap 4
        </h1>
        <p>By Mike Smith | 16 September 2017 | 1:30:20</p>
        <button>Read The Transcript</button>
      </div>
      <div className={`${styles.podcast} container`}>
        <div className={`${styles.podcastHeader}`}>
          <img src="/src/images/photo.png" alt="" />
          <h1>Recent Podcasts</h1>
        </div>
        <div className={`${styles.podcastCards}`}>
          <div className={`${styles.podcastCard}`}>
            <div className={`${styles.podcastCardImg}`}>
              <img
                src="https://preview.colorlib.com/theme/podca/images/img_1.jpg.webp"
                alt=""
              />
            </div>
            <div className={`${styles.podcastCardInfo}`}>
              <h1>Episode 08: How To Create Web Page Using Bootstrap 4</h1>
              <span>By Mike Smith / 16 September 2017 / 1:30:20</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti repellat mollitia consequatur,
                <br />
                optio nesciunt placeat. Iste voluptates excepturi tenetur,
                nesciunt.
              </p>
              <img src="/src/images/photo.png" alt="" />
            </div>
          </div>
          <div className={`${styles.podcastCard}`}>
            <div className={`${styles.podcastCardImg}`}>
              <img
                src="https://preview.colorlib.com/theme/podca/images/img_2.jpg.webp"
                alt=""
              />
            </div>
            <div className={`${styles.podcastCardInfo}`}>
              <h1>Episode 08: How To Create Web Page Using Bootstrap 4</h1>
              <span>By Mike Smith / 16 September 2017 / 1:30:20</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti repellat mollitia consequatur,
                <br />
                optio nesciunt placeat. Iste voluptates excepturi tenetur,
                nesciunt.
              </p>
              <img src="/src/images/photo.png" alt="" />
            </div>
          </div>
          <div className={`${styles.podcastCard}`}>
            <div className={`${styles.podcastCardImg}`}>
              <img
                src="https://preview.colorlib.com/theme/podca/images/img_3.jpg.webp"
                alt=""
              />
            </div>
            <div className={`${styles.podcastCardInfo}`}>
              <h1>Episode 08: How To Create Web Page Using Bootstrap 4</h1>
              <span>By Mike Smith / 16 September 2017 / 1:30:20</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti repellat mollitia consequatur,
                <br />
                optio nesciunt placeat. Iste voluptates excepturi tenetur,
                nesciunt.
              </p>
              <img src="/src/images/photo.png" alt="" />
            </div>
          </div>
          <div className={`${styles.podcastCard}`}>
            <div className={`${styles.podcastCardImg}`}>
              <img
                src="https://preview.colorlib.com/theme/podca/images/img_4.jpg.webp"
                alt=""
              />
            </div>
            <div className={`${styles.podcastCardInfo}`}>
              <h1>Episode 08: How To Create Web Page Using Bootstrap 4</h1>
              <span>By Mike Smith / 16 September 2017 / 1:30:20</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti repellat mollitia consequatur,
                <br />
                optio nesciunt placeat. Iste voluptates excepturi tenetur,
                nesciunt.
              </p>
              <img src="/src/images/photo.png" alt="" />
            </div>
          </div>
          <div className={`${styles.podcastCard}`}>
            <div className={`${styles.podcastCardImg}`}>
              <img
                src="https://preview.colorlib.com/theme/podca/images/img_5.jpg.webp"
                alt=""
              />
            </div>
            <div className={`${styles.podcastCardInfo}`}>
              <h1>Episode 08: How To Create Web Page Using Bootstrap 4</h1>
              <span>By Mike Smith / 16 September 2017 / 1:30:20</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti repellat mollitia consequatur,
                <br />
                optio nesciunt placeat. Iste voluptates excepturi tenetur,
                nesciunt.
              </p>
              <img src="/src/images/photo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.mic} container`}>
        <div className={`${styles.podcastHeader}`}>
          <h1>Behind The Mic</h1>
        </div>
        <div className={`${styles.micCards}`}>
          <div className={`${styles.micCard}`}>
            <img
              src="https://preview.colorlib.com/theme/podca/images/person_1.jpg.webp"
              alt=""
            />
          </div>
          <div className={`${styles.micCard}`}>
            <img
              src="https://preview.colorlib.com/theme/podca/images/person_2.jpg.webp"
              alt=""
            />
          </div>
          <div className={`${styles.micCard}`}>
            <img
              src="https://preview.colorlib.com/theme/podca/images/person_3.jpg.webp"
              alt=""
            />
          </div>
          <div className={`${styles.micCard}`}>
            <img
              src="https://preview.colorlib.com/theme/podca/images/person_4.jpg.webp"
              alt=""
            />
          </div>
          <div className={`${styles.micCard}`}>
            <img
              src="https://preview.colorlib.com/theme/podca/images/person_5.jpg.webp"
              alt=""
            />
          </div>
          <div className={`${styles.micCard}`}>
            <img
              src="https://preview.colorlib.com/theme/podca/images/person_6.jpg.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={`${styles.feature} container`}>
        <div className={`${styles.podcastHeader}`}>
          <h1>Featured Guests</h1>
        </div>
        <div className={`${styles.featureCards}`}>
          {data &&
            data.map((data) => (
              <div className={`${styles.featureCard}`}>
                <div className={`${styles.featureCardImg}`}>
                  <img src={data.img} alt="" />
                </div>
                <div className={`${styles.featureCardInfo}`}>
                  <h1>{data.name}</h1>
                  <p>{data.desc}</p>
                  <IconButton onClick={() => handleAddFav(data._id)}>
                    <FavoriteIcon className={`${styles.featureCardInfoIcon}`} />
                  </IconButton>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
