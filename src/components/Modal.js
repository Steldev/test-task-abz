import React from 'react'
import Button from "./Button";

export default function (props) {
    return <div onClick={props.closeModal} className="modal-bg">
        <div className="modal">
            <h2>Congratulations</h2>
            <hr />
            <p>You have successfully passed the registration</p>
            <hr />
            <Button clickHandle={props.closeModal}>Great</Button>
        </div>
    </div>
}