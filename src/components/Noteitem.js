import React from 'react'

export default function Noteitem(props) {
    const { note } = props
    return (
        
            <div className='col-md-3 my-3'>
                <div className="card" style={{ backgroundColor: "rgb(209 220 45)" }}>
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.disc} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis repellendus atque sequi tenetur, aliquid fugiat iusto excepturi corporis aut ab tempora maxime facilis corrupti veritatis delectus voluptatum, minima architecto rerum dignissimos quas eveniet iste ducimus! Quidem repudiandae voluptatem veniam! Culpa ad tempore numquam tenetur eligendi.</p>
                        <div className="d-flex justify-content-between">
                            <lord-icon className="mx-3 "
                                src="https://cdn.lordicon.com/drxwpfop.json"
                                trigger="hover"
                                style={{ width: "250px;height:250px" }}>
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
