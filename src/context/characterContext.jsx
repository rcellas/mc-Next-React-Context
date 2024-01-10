"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CharactersContext = createContext();

export function CharacterProvider({children}){
    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then((response)=>response.json())
        .then((data)=>setCharacters(data.results))
    },[]);

    return(
        <CharactersContext.Provider value={characters}>
            {children}
        </CharactersContext.Provider>
    )
}

export function useCharacters(){
     return useContext(CharactersContext)
}

