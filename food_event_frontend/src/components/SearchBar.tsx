import React from "react";

// PUBLIC_INTERFACE
interface SearchBarProps {
  search: string;
  onSearch: (arg0: string) => void;
}

// PUBLIC_INTERFACE
const SearchBar: React.FC<SearchBarProps> = ({ search, onSearch }) => (
  <input
    className="searchbar"
    type="search"
    placeholder="Search events..."
    value={search}
    onChange={e => onSearch(e.target.value)}
  />
);

export default SearchBar;
