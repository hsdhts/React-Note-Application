import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan..."
        value={searchTerm}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
}

export default SearchBar;
