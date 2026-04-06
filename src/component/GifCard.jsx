function GifCard({ gif }) {
    const imageUrl =
        gif.media?.[0]?.mediumgif?.url ||
        gif.media?.[0]?.gif?.url ||
        gif.media?.[0]?.tinygif?.url ||
        "";

    return (
        <div className="gif-card">
            <img src={imageUrl} alt={gif.title || "GIF"} />
        </div>
    );
}

export default GifCard; 