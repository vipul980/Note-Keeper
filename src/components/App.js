import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App() {
    const [newNote, setnewNote] = React.useState([]);
    function submitNote(note) {
       setnewNote(prevNote => {
           return [...prevNote, note];
       })
    }

    function deleteNote(id) {
     setnewNote(prevNotes => {
         return prevNotes.filter((noteItem, index) => {
             return index !== id;
         });
     });
    }

    return <div>
    <Header />
    <CreateArea 
    addNote={submitNote}/>
    {newNote.map((notes, index) => {
        return <Note key={index} id={index} title={notes.title}
        content={notes.content} onDelete={deleteNote}/>
    })}
    
    <Footer />
    </div>
};

export default App;