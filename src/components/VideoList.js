import React from "react";
import PropTypes from "prop-types";

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

VideoList.propTypes = {
  videos: PropTypes.array,
  videoPlay: PropTypes.func
};

export default VideoList;
