"use client";
// characterContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const CharactersContext = createContext();

export function CharacterProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results || []);
        setFilteredCharacters(data.results || []);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCharacters(characters);
      return;
    }

    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
  }, [searchTerm, characters]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <CharactersContext.Provider value={{ characters: filteredCharacters, handleSearch }}>
      {children}
    </CharactersContext.Provider>
  );
}

export function useCharacters() {
  return useContext(CharactersContext);
}

