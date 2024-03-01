import {Character, charactersResponse} from "../../characters.ts";
import {useParams} from "react-router-dom";
import CharacterCard from "../components/CharacterCard/CharacterCard.tsx";



export default function CharacterDetailCard(){

    const params = useParams()
    const id = Number(params.id)
    const character:Character | undefined = charactersResponse.results.find(character=> character.id === id)

    return (
        <>
            <div>
                {character
                    ?
                    <>
                        <h2>{character.name}</h2>
                        <CharacterCard character={character}/>
                    </>
                    :
                    <>
                        <h2>Character not found!</h2>
                    </>}

            </div>
        </>
    )
}
