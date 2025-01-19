import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className={`${styles.nav}`}>
        <div className={`${styles.navLeft}`}>
          <h1>Podca</h1>
        </div>
        <div className={`${styles.navRight}`}>
          <ul>
            <li>
              <NavLink className={`${styles.navNav}`} to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={`${styles.navNav}`} to={"/favorites"}>
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink className={`${styles.navNav}`} to={"addproduct"}>
                Add Product
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
