import React from 'react';
import "./FormContainer.css";
import sidebarDesktop from "../../images/bg-sidebar-desktop.svg"

function FormContainer(props) {
    return (
        <div className={"form-container"}>
            <div className={"side-bar"}></div>
            <div className={"step-container"}>
                <form className={"form"}>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </form>
            </div>
        </div>
    );
}

export default FormContainer;