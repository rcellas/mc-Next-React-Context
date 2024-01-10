"use client"
import CharactersList from "./components/CharactersList/CharactersList"
import { useCharacters } from "@/context/characterContext"

export default function Home() {
  const characters = useCharacters()
  
  return (
    <main>
      <h1>
        Lista personajes de Rick and Morty
      </h1>
      <CharactersList characters={characters}/>
    </main>
  )
}
