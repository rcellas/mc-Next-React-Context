"use client";
import { useCharacters } from "@/context/characterContext";
import { useState } from "react";

export default function SearchBar() {
  const { handleSearch } = useCharacters();
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  return (
    <input
      type="text"
      placeholder="Search characters"
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
}