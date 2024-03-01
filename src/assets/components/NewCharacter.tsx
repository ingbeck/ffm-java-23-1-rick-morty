import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "../../characters.ts";
import "./NewCharacter.css"

type formInput = {
    id:string,
    name:string,
    status:string,
    species:string
}

type NewCharacterProps = {
    addCharacter:(newChar:Character) => void
}

export default function NewCharacter(props: NewCharacterProps) {

    const[formData, setFormData] = useState<formInput>({
        id:"",
        name:"",
        status:"",
        species:""
    })


    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        const name = event.target.name; //<input ... name={"..."} .../>

        setFormData({
            ...formData,
            [name]: value
        })

    }

    function handleOnSubmit(e){
        e.preventDefault()
        props.addCharacter({
            id:Number(formData.id),
            name:formData.name,
            status:formData.status,
            species:formData.species,
            type:"",
            image:"https://rickandmortyapi.com/api/character/avatar/19.jpeg"
        })

        setFormData({
            id:"",
            name:"",
            status:"",
            species:""
        })
    }


        return (
        <>
            <form onSubmit={handleOnSubmit}>
                <h3>Add new Character</h3>
                <div className="formElement">
                    <label htmlFor={"id"}>Id:</label>
                    <input type={"number"} id={"id"} name={"id"} value={formData.id} onChange={handleChange}/>
                </div>
                <div className="formElement">
                    <label htmlFor={"name"}>Name:</label>
                    <input type={"text"} id={"name"} name={"name"} value={formData.name} onChange={handleChange}/>
                </div>
                <div className="formElement">
                    <label htmlFor={"status"}>Status:</label>
                    <input type={"text"} id={"status"} name={"status"} value={formData.status} onChange={handleChange}/>
                </div>
                <div className="formElement">
                    <label htmlFor={"species"}>Species:</label>
                    <input type={"text"} id={"species"} name={"species"} value={formData.species} onChange={handleChange}/>
                </div>
                <button type={"submit"} >Submit</button>
            </form>
        </>
    )
}
