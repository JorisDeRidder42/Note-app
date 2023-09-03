import React from "react";

const CreateNote = () => {

  return (
    <>
        <div className="note">
        <textarea
            cols={10}
            rows={5}
            placeholder="Type..."
            maxLength={100}
        />
            <div className="note-footer">
                <button className="note-save">Save</button>
            </div>
            
        </div>
    </>
  );
}
export default CreateNote;