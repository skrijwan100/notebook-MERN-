import React, { useEffect } from 'react'
import Notecontext from '../context/notecontext'
import { useContext } from 'react'
import Noteitem from './Noteitem'
import Addnote from './Addnote'
export default function Note() {
  const contextnotes = useContext(Notecontext)
  const { note,getallnote } = contextnotes
  useEffect(()=>{
    getallnote()
  },[])
  return (
    <>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      <Addnote/>
    <div>
      <div className="row my-3 d-flex" style={{ backgroundColor: "#0dcaf0" }}>
        <center style={{ backgroundColor: "#rgb(13 240 95)" }}><h1>Your note</h1></center>
        {note.map((note) => {
          return <Noteitem key={`${note._id}`}  note={note} />
        })}

      </div>
    </div>
        </>
  )
}
