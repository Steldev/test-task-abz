import React from 'react';
import Button from "./Button";
import Modal from './Modal'

export default function (props) {
    return <div className="reg-form-wrapper row justify-content-center">
        {props.showModal && <Modal closeModal={props.closeModal}/>}
        <form className="reg-form col-xs-12 col-sm-8 col-md-6 justify-content-center px-15">
            <label htmlFor="reg-name">Name</label>
            <input id="reg-name" placeholder="Your name"
                   value={props.name}
                   onChange={props.fieldChangeHandle}
            />
            {props.errors && props.errors.name && <div className="error">{props.errors.name}</div>}

            <label htmlFor="reg-email">Email</label>
            <input id="reg-email" placeholder="Your email"
                   value={props.email}
                   onChange={props.fieldChangeHandle}
            />
            {props.errors && props.errors.email && <div className="error">{props.errors.email}</div>}

            <label htmlFor="reg-phone">Phone</label>
            <input id="reg-phone" placeholder="+380 XX XXX XX XX"
                   value={props.phone}
                   onChange={props.fieldChangeHandle}
            />
            {props.errors && props.errors.phone && <div className="error">{props.errors.phone}</div>}

            {props.positions && props.positions.length && <>
                <label className="mb-20" htmlFor="positions">Select your position</label>
                {props.positions.map((element, index) => <div key={index} className="radio-element">
                        <input id={index} type="radio" name="positions"
                               onChange={props.positionChangeHandle}
                               defaultChecked={index === props.position}/>
                        <label className="mt-0" htmlFor={index}>{element}</label>
                    </div>)
                }
            </>}
            {props.formErrors && <div className="error">{props.formErrors}</div>}

            <label className="mt-20" htmlFor="custom-file">Photo</label>
            <div className="mb-40 custom-file">
                <input ref={props.fileRef} id="reg-photo" type="file" placeholder="Upload your photo"/>
                <label className="mt-0" htmlFor="reg-photo">Upload your photo</label>
            </div>

            <Button clickHandle={props.postFormHandle}>Sing up now</Button>
        </form>
    </div>;
}