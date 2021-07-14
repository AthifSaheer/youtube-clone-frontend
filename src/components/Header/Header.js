import React, { Fragment } from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes.header__head}>
          <span className="material-icons">menu</span>
          <img
            className={classes.header__logo}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="Youtube Logo"
          />
        </div>

        <div className={classes.header__mid}>
          <input placeholder="Ara" />
          <span className="material-icons">search</span>
          <span className="material-icons">mic</span>
        </div>

        <div className={classes.header__end}>
          <span className="material-icons">videocam</span>
          <span className="material-icons">grid_view</span>
          <span className="material-icons">notifications</span>
          <span className="material-icons">person</span>
        </div>
      </div>
      <div className={classes.constant}></div>
    </Fragment>
  );
};

export default Header;
