import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "../characters.ts";

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


    function handleChangeId(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;

        setFormData({
            ...formData,
            id: value
        })
        console.log(value)

    }

    function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;

        setFormData({
            ...formData,
            name: value
        })

    }

    function handleChangeStatus(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;

        setFormData({
            ...formData,
            status: value
        })

    }
    function handleChangeSpecies(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;

        setFormData({
            ...formData,
            species: value
        })

    }

    function handleOnClickSubmit(e){
        e.preventDefault()
        props.addCharacter({
            id:Number(formData.id),
            name:formData.name,
            status:formData.status,
            species:formData.species,
            type:"",
            image:""
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
            <form onSubmit={handleOnClickSubmit}>
                <div>
                    <label htmlFor={"id"}>Id:</label>
                    <input type={"number"} id={"id"} name={"id"} value={formData.id} onChange={handleChangeId}/>
                </div>
                <div>
                    <label htmlFor={"name"}>Name:</label>
                    <input type={"text"} id={"name"} name={"name"} value={formData.name} onChange={handleChangeName}/>
                </div>
                <div>
                    <label htmlFor={"status"}>Status:</label>
                    <input type={"text"} id={"status"} name={"status"} value={formData.status} onChange={handleChangeStatus}/>
                </div>
                <div>
                    <label htmlFor={"species"}>Species:</label>
                    <input type={"text"} id={"species"} name={"species"} value={formData.species} onChange={handleChangeSpecies}/>
                </div>
                <button type={"submit"} >Submit</button>
            </form>
        </>
    )
}
