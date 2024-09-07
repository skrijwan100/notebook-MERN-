import React from 'react'
import Notecontext from '../context/notecontext'
import { useContext } from 'react'
import Noteitem from './Noteitem'
import Addnote from './Addnote'
export default function Note() {
  const contextnotes = useContext(Notecontext)
  const { note } = contextnotes
  return (
    <>
      <Addnote/>
    <div>
      <div className="row my-3 d-flex" style={{ backgroundColor: "#0dcaf0" }}>
        <center style={{ backgroundColor: "#rgb(13 240 95)" }}><h1>Your note</h1></center>
        {note.map((note) => {
          return <Noteitem key={`${note._id}`} note={note} />
        })}

      </div>
    </div>
        </>
  )
}
