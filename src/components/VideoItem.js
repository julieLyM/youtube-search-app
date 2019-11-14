import React from "react";

function VideoItem({ video, videoPlay }) {
  return (
    <div>
      <ul>
        <li>
          <img src={video.thumbnails.medium.url} />
          <button onClick={() => videoPlay(video.id)}>video play</button>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
        </li>
      </ul>
    </div>
  );
}

export default VideoItem;
