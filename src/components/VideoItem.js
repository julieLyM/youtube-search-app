import React from "react";
import PropTypes from "prop-types";

function VideoItem({ video, videoPlay }) {
  return (
    <div>
      <ul>
        <img src={video.thumbnails.medium.url} alt="characters" />
        <button onClick={() => videoPlay(video.id)}> video play</button>
        <h2>{video.title}</h2>
        <p>{video.description}</p>
      </ul>
    </div>
  );
}

VideoItem.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    description: PropTypes.string
  }),
  videoPlay: PropTypes.func
};

export default VideoItem;
