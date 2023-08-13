import React from "react";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";

function Tweet(props) {
  return (
    <div className="tweet">
      {/* <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      /> */}
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name"><User user={props.tweet.user.name} /></span>
            <span className="handle"><User user= {props.tweet.user.handle} /></span>
          </span>

          {/* <span className="timestamp">{props.tweet.timestamp}</span> */}
      <Timestamp timestamp={props.tweet.timestamp} />
        </div>

        <p className="message">
        <Message message={props.tweet.message}/>
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment">Comment</i>
          <i className="fas fa-retweet">Retweet</i>
          <i className="far fa-heart">Like</i>
          <i className="fas fa-share">Share</i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
