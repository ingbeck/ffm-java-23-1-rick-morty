import './App.css'
import React, {useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import CharacterGallery from "./assets/components/CharacterGallery.tsx";
import {Link, Route, Routes} from "react-router-dom";
import CharacterDetailCard from "./assets/Pages/CharacterDetailPage.tsx";
import SearchComponent from "./searchComponent.tsx";
import NewCharacter from "./assets/components/NewCharacter.tsx";

function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    const [searchText, setSearchText] = useState<string>("")

    const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(searchText.toLowerCase()))

    function addCharacter(newChar:Character){
        setCharacters([...characters, newChar])
    }

    return (
        <>
            <header>
                <h1>Rick and Morty Characters</h1>
                <nav>
                    <Link className="navbarItem" to={"/"}>HOME</Link>
                    <Link className="navbarItem" to={"/Characters"}>CHARACTERS</Link>
                    <Link className="navbarItem" to={"/AddCharacter"}>ADD CHARACTER</Link>
                    <SearchComponent searchText={searchText} handleSearchText={setSearchText}/>
                </nav>
            </header>
            <Routes>
                <Route path={"/"} element={<h1>Willkommen!</h1>}/>
                <Route path={"/Characters"} element={<CharacterGallery characters={filteredCharacters}/>}/>
                <Route path={"/AddCharacter"} element={<NewCharacter addCharacter={addCharacter}/>}/>
                <Route path={"/Characters/:id"} element={<CharacterDetailCard characters={characters}/>}/>
            </Routes>
        </>
    )
}

export default App
