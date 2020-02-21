import React from 'react'

export default function (props) {
    return <div className={"user-wrapper mb-40 " + props.className}>
        <div className="user">
            <img src={props.photo} alt=''/>
            <h2 title={props.name} className="m-0 mb-20">{props.name}</h2>
            <p title={props.position}>{props.position}</p>
            <p title={props.email}>{props.email}</p>
            <p title={props.phone}>{props.phone}</p>
        </div>
    </div>
}