import './CharacterCardImage.css'
import {Character} from "../../../characters.ts";

type CharacterCardImageProps = {
    character:Character
}
export default function CharacterCardImage(props:Readonly<CharacterCardImageProps>) {

    return (
        <>
            <img className="characterPicture" src={props.character.image} alt={props.character.name}/>
        </>
    )
}
