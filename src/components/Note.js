import React from "react";

function Note(props) {

     function handleDelete() {
      props.onDelete(props.id)
     } 

    return <div className="note">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
};

export default Note;

