import React from "react";

import classes from "./VideoCard.module.css";

import image from "../../image/youtube2.jpg";

const VideoCard = (props) => {
  return (
    <div className={classes.video_card}>
      <div className={classes.video_card__image}>
        <img src={image} alt="youtube video picture" />
      </div>
      <div className={classes.video_card__content}>
        <div className={classes.video_card__channelpicture}>
          <span className="material-icons">account_circle</span>
        </div>
        <div className={classes.video_card_info}>
          <span className={classes.video_card__title}>{props.title}</span>
          <span className={classes.video_card__channelname}>{props.channel}</span>
          <span className={classes.video_card__view}>{props.view}</span>
          <span className={classes.video_card__date}>{props.date}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
