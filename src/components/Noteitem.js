import React from 'react'
import Notecontext from '../context/notecontext'
import { useContext } from 'react'

export default function Noteitem(props) {
    const contextnotes = useContext(Notecontext)
    const { deletenote } = contextnotes

    const { note } = props
    return (
        
            <div className='col-md-3 my-3'>
                <div className="card" style={{ backgroundColor: "rgb(209 220 45)" }}>
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.disc}</p>
                        <p className="card-text">{note.data}</p>
                        <div className="d-flex justify-content-between">
                            <lord-icon className="mx-3 "
                                src="https://cdn.lordicon.com/drxwpfop.json"
                                trigger="hover"
                                style={{ width: "250px;height:250px" }} onClick={()=>deletenote(note._id)}>
                            </lord-icon>
                            <lord-icon
                                src="https://cdn.lordicon.com/wuvorxbv.json"
                                trigger="hover"
                                state="hover-line"
                                style={{ width: "250px;height:250px" }}>
                            </lord-icon>
                        </div>
                    </div>
                </div>
            </div>
    )
}
