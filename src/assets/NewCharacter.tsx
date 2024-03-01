import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "../characters.ts";

type formInput = {
    id:number | null,
    name:string,
    status:string,
    species:string
}

type NewCharacterProps = {
    setCharacter:(newChar:Character) => void
}

export default function NewCharacter(props: Readonly<NewCharacterProps>) {

    const[formData, setFormData] = useState<formInput>({
        id:null,
        name:"",
        status:"",
        species:""
    })


    function handleChangeId(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;

        setFormData({
            ...formData,
            id: Number(value)
        })

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

    function handleOnSubmit(event: FormEvent<HTMLFormElement> ){
        
    }

        return (
        <>
            <form onSubmit={handleOnSubmit}>
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
                <button type={"submit"}>Submit</button>
            </form>
        </>
    )
}
