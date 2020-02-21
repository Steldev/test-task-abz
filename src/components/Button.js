import React from 'react'

export default function (props) {
    return <div onClick={props.clickHandle} className="button bg-primary text-white">
        {props.children}
    </div>;
}