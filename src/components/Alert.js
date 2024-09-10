import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:"70px"}}>
            { props.alert && <div className={`alert alert-${props.alert.ty} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.msg}</strong> 
        </div>}
        </div>

      
    )
}

