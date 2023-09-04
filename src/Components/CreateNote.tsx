import React from "react";

const CreateNote = ({inputText} : any)=> {

  return (
    <>
        <div className="note">
        <textarea
            cols={10}
            rows={5}
            placeholder="Type..."
            maxLength={100}
            value={inputText}
        />
            <div className="note-footer">
                <button className="note-save">Save</button>
            </div>
            
        </div>
    </>
  );
}
export default CreateNote;