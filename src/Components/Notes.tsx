import CreateNote from "./CreateNote";
import Note from "./Note"
import React from "react";


const Notes = () => {
 
    return(
        <div className="notes">
            <Note />
            <Note />
            <CreateNote/>
        </div>
    )
}
export default Notes;