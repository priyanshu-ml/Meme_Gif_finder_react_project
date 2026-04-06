import { useEffect, useState } from "react";
import GifCard from "./GifCard";

function GifGrid({ query }) {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        if (!query) return;

        fetch(`https://api.tenor.com/v1/search?key=LIVDSRZULELA&q=${query}&limit=12`)
            .then((res) => res.json())
            .then((data) => {
                setGifs(Array.isArray(data.results) ? data.results : []);
            })
            .catch(() => {
                setGifs([]);
            });
    }, [query]);

    return (
        <div className="gif-grid">
            {gifs.map((gif) => (
                <GifCard key={gif.id} gif={gif} />
            ))}
        </div>
    );
}

export default GifGrid;