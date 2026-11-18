/* ======================================================
    Lab 8 - SearchBar.jsx starter
====================================================== */

import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
    // TODO 13: 
    // Create local state variable inputValue initialized to "" 
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO 14: 
        // If inputValue.trim() is not empty, search and clear the input
        if (inputValue.trim() !== "") {
            onSearch(inputValue.trim());
            setInputValue("");
        }
    };

    return (
        <form className="searchForm" onSubmit={handleSubmit}>
            {/* TODO 15: Controlled input */}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search for a movie title (e.g., Inception)"
            />
            <button type="submit" className="primary">Search Movies</button>
        </form>
    );
}
