"use client";
import { useCharacters } from "@/context/characterContext";
import { useState } from "react";

export default function SearchBar() {
  const { characters } = useCharacters();
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);

  const onSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Mostrar resultados solo si se ingresa un término de búsqueda
    setShowResults(!!term);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search characters"
        value={searchTerm}
        onChange={onSearchChange}
      />
      {showResults && (
        <ul>
          {filteredCharacters.map((character) => (
            <li key={character.id}>
              <img src={character.image} alt={character.name} />
              <div>
                <h2>{character.name}</h2>
                <p>{character.species}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


