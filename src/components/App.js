import React from "react";

import AppTitle from "./AppTitle";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AppTitle />
      <SearchBar />
      <VideoPlayer />
      <VideoList />
    </div>
  );
}

export default App;
