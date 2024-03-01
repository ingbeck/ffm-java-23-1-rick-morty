import {ChangeEvent, useState} from "react";

type SearchComponentProps = {
    handleSearchText: (searchText: string) => void,
    searchText:string
}

export default function SearchComponent(props: Readonly<SearchComponentProps>) {


    function handleInputOnChange(event:ChangeEvent<HTMLInputElement>){
        props.handleSearchText(event.target.value);
    }

    return (
        <>
            <input value={props.searchText} onChange={handleInputOnChange}/>
        </>
    )
}
