import React from "react";
import PropTypes from "prop-types";

function VideoPlayer({ id }) {
  return (
    <div>
      <h2>Component VideoPlayer</h2>
      <iframe src={`https://www.youtube.com/embed/${id}`} title="frame videos youtube"/>
    </div>
  );
}

VideoPlayer.propTypes = {
  id: PropTypes.func
};

export default VideoPlayer;
