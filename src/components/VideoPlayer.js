import React from "react";

function VideoPlayer({ video, id }) {
  return (
    <div>
      <h2>Component VideoPlayer</h2>
      <iframe src={`https://www.youtube.com/embed/${id}`} />
    </div>
  );
}

export default VideoPlayer;
