import {Character} from "../../characters.ts";
import CharacterCard from "./CharacterCard/CharacterCard.tsx";
import SearchComponent from "../../searchComponent.tsx";

type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(props: CharacterGalleryProps) {

    return (
        <div>
            <h2>Characters</h2>
            {props.characters.map(character => <CharacterCard
                                                                key={character.id}
                                                                character={character}/>)}
        </div>
    )
}
