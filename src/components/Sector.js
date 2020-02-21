import React from 'react'

export default function (props) {
    return <div className={"sector " + props.bgColor} id={props.id}>
        {props.children}
    </div>
}