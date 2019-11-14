import React from "react";
import debounce from "lodash.debounce";

import AppTitle from "./AppTitle";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import YouTube from "simple-youtube-api";
import auth from "../Auth";
import "./App.css";

const youtube = new YouTube(auth);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      id: null,
      query: ""
    };
    this.debouncedSearch = debounce(this.searchVideo, 2000);
  }

  componentDidMount() {
    this.searchVideo("Hulk");
  }

  clicVideoPlayer(id) {
    this.setState({
      id
    });
  }

  async searchVideo(query) {
    const results = await youtube.searchVideos(query);
    this.setState({
      videos: results
    });
  }

  searchValue(e) {
    this.setState({
      query: e.target.value
    });
    this.debouncedSearch(e.target.value);
  }

  render() {
    const { videos, id } = this.state;
    return (
      <div className="App">
        <AppTitle />
        <SearchBar onQueryChange={this.searchValue.bind(this)} />
        <VideoPlayer id={id} />
        <VideoList
          videos={videos}
          videoPlay={this.clicVideoPlayer.bind(this)}
        />
      </div>
    );
  }
}

export default App;
