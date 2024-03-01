import {Character} from "../../characters.ts";
import {useParams} from "react-router-dom";
import CharacterCard from "../components/CharacterCard/CharacterCard.tsx";

type CharacterDetailCardProps = {
    characters:Character[]
}

export default function CharacterDetailCard(props: Readonly<CharacterDetailCardProps>){

    const params = useParams()
    const id = Number(params.id)
    const character:Character | undefined = props.characters.find(character=> character.id === id)

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
