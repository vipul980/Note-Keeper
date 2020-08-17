import React from "react";

function CreateArea(props) {
   const [note, setNote] = React.useState({
       title: "",
       content: ""
   });


    function handleClick(e) {
     props.addNote(note);
     
     e.preventDefault();
     setNote({
         title:"",
         content: ""
     });
     
    }
     
     function handleChange(e) {
        const {name, value} = e.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            } 
        })
     }

    return (
    <div className="createArea">
    <form>
    <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
    <textarea name="content" onChange={handleChange} placeholder="Take a note....." value={note.content} rows="3"/>
    <button onClick={handleClick}>+</button>
    </form>
    </div>
    )
}

export default CreateArea;