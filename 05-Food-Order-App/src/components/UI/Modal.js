<<<<<<< HEAD
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
};

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
=======
import React from "react";
import classes from "./Modal.module.css";

const Modal = props => {
    return (
        <div className={classes.modal}>
            
>>>>>>> ed16c5b9e24071d105f0ffd5608dcd1b64c5c596
        </div>
    );
};

<<<<<<< HEAD
const portalElement = document.getElementById('overlays');

const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
};

=======
>>>>>>> ed16c5b9e24071d105f0ffd5608dcd1b64c5c596
export default Modal;