import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos, videoPlay }) {
  return (
    <div>
      {videos.map(video => (
        <VideoItem key={video.id} video={video} videoPlay={videoPlay} />
      ))}
    </div>
  );
}

export default VideoList;
