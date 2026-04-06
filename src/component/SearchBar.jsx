import { useState } from "react";

function SearchBar({ setQuery }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(input);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search GIFs..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;