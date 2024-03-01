import './App.css'
import React, {useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import CharacterGallery from "./CharacterGallery.tsx";
import {Link, Route, Routes} from "react-router-dom";
import CharacterDetailCard from "./assets/Pages/CharacterDetailPage.tsx";
import SearchComponent from "./searchComponent.tsx";
import NewCharacter from "./assets/NewCharacter.tsx";

function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    const [searchText, setSearchText] = useState<string>("")

    const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(searchText.toLowerCase()))

    function addCharacter(newChar:Character){
        setCharacters([...characters,
            newChar])
    }

    return (
        <>
            <header>
                <h1>Rick and Morty Characters</h1>
                <nav>
                    <Link className="navbarItem" to={"/"}>HOME</Link>
                    <Link className="navbarItem" to={"/Characters"}>CHARACTERS</Link>
                    <SearchComponent searchText={searchText} handleSearchText={setSearchText}/>
                </nav>
            </header>
            <Routes>
                <Route path={"/"} element={<NewCharacter addCharacter={addCharacter}/>}/>
                <Route path={"/Characters"} element={<CharacterGallery characters={filteredCharacters}/>}/>
                <Route path={"/Characters/:id"} element={<CharacterDetailCard/>}/>
            </Routes>
        </>
    )
}

export default App
