
// import { json } from "react-router-dom";
import notecontext from "./notecontext";
import { useState } from "react";

const Notesate = (props) => {
  const host = "http://localhost:5000/"
  const allnotestate = []
  //get all notes 
  const getallnote = async () => {
    const url = `${host}api/notes/fectnote`
    const responce = await fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),

      },

    })
    const data = await responce.json()
    console.log(data);
    setnote(data)
  }


  // Add note
  // const [notes,setnotes]=useState(allnotestate)

  const addnote = async (title, disc, tag) => {
    const url = `${host}api/notes/addnote`
    const responce = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),


      },
      body: JSON.stringify({title, disc, tag})
    })
    const newnote = await responce.json()
    console.log(newnote)
    setnote(note.concat(newnote))

  }

  // delete note

  const deletenote = async (id) => {

    const url = `${host}api/notes/delete/${id}`
    const responce = await fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",

        "auth-token":localStorage.getItem('token'),

      },


    })
    console.log("delet note id:" + id)
    const newnote = note.filter((note) => { return note._id !== id })
    setnote(newnote)
  }

  //edite note

  const editenote = async (id, title, disc, tag) => {
    //API call
    console.log(id)
    const url = `${host}api/notes/update/${id}`
    const responce = await fetch(url, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),

      },
      body: JSON.stringify({title, disc, tag})
    })
    const json=await responce.json()

    const newnote=JSON.parse(JSON.stringify(note))

    //logic edit note
    for (let index = 0; index < newnote.length; index++) {
      const e = note[index];
      if (e._id === id) {
        newnote[index].title = title
        newnote[index].disc = disc
        newnote[index].tag = tag
        break;
      }

    }
   setnote(newnote)
  }


  const [note, setnote] = useState(allnotestate)

  return (
    <notecontext.Provider value={{ note, addnote, editenote, deletenote, getallnote }}>
      {props.children}
    </notecontext.Provider>

  )
}

export default Notesate