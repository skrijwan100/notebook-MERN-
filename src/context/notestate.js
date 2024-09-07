
import notecontext from "./notecontext";
import { useState } from "react";

const Notesate = (props) => {
  let allnotestate = [
    {
      "_id": "66d8bbda9c1e10ddbbc637f3",
      "title": "hallo world",
      "disc": "i am sk rijwan",
      "tag": "hwc",
      "data": "Thu Sep 05 2024 01:28:18 GMT+0530 (India Standard Time)",
      "__v": 0
    },
    {
      "_id": "66d8bc12w9c1e10ddbbc637f7",
      "title": "hallo world",
      "disc": "i am sk rijwan",
      "tag": "hwc",
      "data": "Thu Sep 05 2024 01:29:14 GMT+0530 (India Standard Time)",
      "__v": 0
    },
    {
      "_id": "66d945f42wc9e2d70635cdcb6",
      "title": "hallo_world",
      "disc": "i am sk rijwan",
      "tag": "hwc",
      "data": "Thu Sep 05 2024 11:17:32 GMT+0530 (India Standard Time)",
      "__v": 0
    },


  ]

// Add note
// const [notes,setnotes]=useState(allnotestate)

const addnote=(title,disc,tag)=>{
  const newnote ={
    "_id":  Math.random().toString(36).substr(2, 9),
    "title":title,
    "disc": disc,
    "tag": tag,
    "data": "Thu Sep 05 2024 11:17:32 GMT+0530 (India Standard Time)",
    "__v": 0

  }
  setnote(note.concat(newnote))

}

// delete note

const deletenote=(id)=>{
  console.log("delet note id:"+id)
  const newnote=note.filter((note)=>{return note._id!==id})
  setnote(newnote)

}

//edite note

const editenote=()=>{

}


  const [note, setnote] = useState(allnotestate)

  return (
    <notecontext.Provider value={{note, addnote,editenote,deletenote}}>
      {props.children}
    </notecontext.Provider>

  )
}

export default Notesate