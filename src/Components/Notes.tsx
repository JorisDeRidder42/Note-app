import CreateNote from "./CreateNote";
// import Note from "./Note"
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Note from "./Note";



const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState("");

        //get text
        const textHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
            setInputText(e.target.value);
        }
        // // save note
        // const saveHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        //     setNotes((prevState) => [
        //         ...prevState,
        //         {
        //             id: uuid(),
        //             text: inputText 
        //         },
        //     ])
        //     setInputText('')
        // };
    return(
        <div className="notes">
                {notes.map((note) => (
                    <Note 
                        key={note.id}
                        id={note.id}
                        text={note.text}
                        deleteNote={deleteNote}
                    />
                ))}
            <CreateNote textHandler={textHandler} inputText={inputText}/>
        </div>
    )
}
export default Notes;