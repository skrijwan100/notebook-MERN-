
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
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZkNzYyYjE1NzlhZjliOTIyNDU0M2Q2IiwiaWF0IjoxNzI1Mzk2Mzk1fQ.f_IO__7HS1z_ZJvJGan-RYGIZunArv0c4EaAV2eMBBw",

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
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZkNzYyYjE1NzlhZjliOTIyNDU0M2Q2IiwiaWF0IjoxNzI1Mzk2Mzk1fQ.f_IO__7HS1z_ZJvJGan-RYGIZunArv0c4EaAV2eMBBw",


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

        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZkNzYyYjE1NzlhZjliOTIyNDU0M2Q2IiwiaWF0IjoxNzI1Mzk2Mzk1fQ.f_IO__7HS1z_ZJvJGan-RYGIZunArv0c4EaAV2eMBBw",

      },


    })
    console.log("delet note id:" + id)
    const newnote = note.filter((note) => { return note._id !== id })
    setnote(newnote)
  }

  //edite note

  const editenote = async (id, title, disc, tag) => {
    //API call
    const url = `${host}api/notes/update/66d8d12141cd2d57faaae25b`
    const responce = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZkNzYyYjE1NzlhZjliOTIyNDU0M2Q2IiwiaWF0IjoxNzI1Mzk2Mzk1fQ.f_IO__7HS1z_ZJvJGan-RYGIZunArv0c4EaAV2eMBBw",


      },
      body: JSON.stringify(title, disc, tag)
    })
    // const json=responce.json()

    //logic edit note
    for (let index = 0; index < note.length; index++) {
      const e = note[index];
      if (e._id === id) {
        e.title = title
        e.disc = disc
        e.tag = tag
      }

    }

  }


  const [note, setnote] = useState(allnotestate)

  return (
    <notecontext.Provider value={{ note, addnote, editenote, deletenote, getallnote }}>
      {props.children}
    </notecontext.Provider>

  )
}

export default Notesate