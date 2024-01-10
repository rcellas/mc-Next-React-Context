export default function CharactersList({ characters}) {
    return (
      <ul>
          {characters.map((character) => (
              <li key={character.id}>
              <img src={character.image} alt={character.name} />
              <div>
                <h2>{character.name}</h2>
                <p>{character.species}</p>
              </div>
            </li>
          ))}
      </ul>
    )
  }
