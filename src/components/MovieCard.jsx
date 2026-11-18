/* ======================================================
    Lab 8 - MovieCard.jsx starter
====================================================== */

export default function MovieCard({ movie, addToWatchlist }) {
    const posterAvailable = movie.Poster && movie.Poster !== "N/A";

    return (
        <article className="card">
            {posterAvailable ? (
                <img src={movie.Poster} alt={movie.Title} />
            ) : (
                <div className="noPoster">No Poster</div>
            )}

            <div className="cardContent">
                {/* TODO 17: Title */}
                <h3>{movie.Title}</h3>

                {/* TODO 18: Year and type */}
                <p>{movie.Year} – {movie.Type}</p>

                {/* TODO 19: Add to Watchlist button */}
                <button
                    type="button"
                    className="primary cardButton"
                    onClick={() => addToWatchlist(movie)}
                >
                    Add to Watchlist
                </button>
            </div>
        </article>
    );
}
