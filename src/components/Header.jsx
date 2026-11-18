/* ======================================================
    Lab 8 - Header.jsx starter
====================================================== */

export default function Header({ title, searchTerm }) {
    /* TODO 12: Create the entire Header component. */
    return (
        <header className="hero">
            <h1>{title}</h1>
            <p>Search the OMDb database for movies and save your favourites to a watchlist.</p>
            <p className="heroMeta">Showing results for: <strong>{searchTerm}</strong></p>
        </header>
    );
}
