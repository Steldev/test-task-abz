import React from 'react'
import RegForm from "./RegForm";
import {connect} from "react-redux";

import { formPostError, formPostRequest, clearFormError, closeModal } from "../store/RegForm/actions";

import {email, nameLen, required, uaNumber} from "../validations";

const mapStateToProps = state => ({
    positions: state.page.positions,
    formErrors: state.regForm.errors,
    showModal: state.regForm.showModal
});

const mapDispatchToProps = {
    formPostRequest,
    formPostError,
    clearFormError,
    closeModal
};

class RegFormContainer extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        position: 0,
        errors: {
            name: null,
            email: null,
            phone: null
        }
    };

    fileRef = React.createRef();


    positionChangeHandle = event => this.setState({position: event.target.id});

    fieldChangeHandle = event => {
        this.setState({[event.target.id.split('-')[1]]: event.target.value});
        this.setState({
            errors: {...this.state.errors, ...this.validateField(event.target.id.split('-')[1], event.target.value) }
        });
    };

    postFormHandle = () => {
        if (!this.isFormValid(this.state.errors)) return this.props.formPostError('Form is not valid');
        this.props.clearFormError();
        this.props.formPostRequest({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            position: this.state.position,
            photo: this.fileRef.current.files[0]
        });
    };

    // unusual validation | return error message or null if field is valid
    validateField = (id, value) => {
        switch (id) {
            case 'name':
                return {name: required(value) || nameLen(value) || null};
            case 'email':
                return {email: required(value) || email(value) || null};
            case 'phone':
                return {phone: required(value) || uaNumber(value) || null};
            default:
                return {};
        }
    };

    // unusual validation form check
    isFormValid = errors => !Object.keys(errors)
        .reduce((accum, key) => accum || !!this.validateField(key, this.state[key])[key]
    , false) && !!this.fileRef.current.files[0];



    render () {
        return <RegForm
            position={this.state.position}
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
            errors={this.state.errors}
            positions={this.props.positions}
            formErrors={this.props.formErrors}
            showModal={this.props.showModal}
            closeModal={this.props.closeModal}
            positionChangeHandle={this.positionChangeHandle}
            fieldChangeHandle={this.fieldChangeHandle}
            postFormHandle={this.postFormHandle}
            fileRef={this.fileRef}
        />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegFormContainer);