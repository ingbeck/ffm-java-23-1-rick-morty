import {Character} from "../../../characters.ts";
import CharacterCardImage from "./CharacterCardImage.tsx";
import "./CharacterCard.css"
import {useNavigate, useParams} from "react-router-dom";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps){

    const navigate = useNavigate()

    function navigateToChar(){
        navigate("/Characters/" + props.character.id.toString())
    }

    return (
        <div className="characterCard" onClick={navigateToChar}>
            <CharacterCardImage character={props.character}/>
            <div className="characterDetail">
                <h3>
                    {props.character.name}
                </h3>
                <p>
                    Species: {props.character.species}
                </p>
                <p>
                    Status: {props.character.status}
                </p>
            </div>
        </div>
    )
}
