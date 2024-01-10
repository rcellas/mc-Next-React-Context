"use client";
// CharactersList.jsx
import { useCharacters } from "@/context/characterContext";

export default function CharactersList() {
  const { filteredCharacters } = useCharacters();

  return (
    <ul>
      {filteredCharacters?.map((character) => (
        <li key={character.id}>
          <img src={character.image} alt={character.name} />
          <div>
            <h2>{character.name}</h2>
            <p>{character.species}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}


