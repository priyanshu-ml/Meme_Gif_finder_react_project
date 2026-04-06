import { useState } from "react";
import "./App.css";
import SearchBar from "./component/SearchBar";
import GifGrid from "./component/GifGrid";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="app-container">
      <h1>Meme & GIF Finder 🔍</h1>
      <SearchBar setQuery={setQuery} />
      <GifGrid query={query} />
    </div>
  );
}

export default App;