import React from 'react';

function Form(props) {
    return (
        <div className={"form-side-wrapper"}>
            <h2 className={"form-side-title"}>Personal info</h2>
            <span className={"form-side-subtitle"}>Please provide your name, email address, and phone number.</span>
            <form className={"form-side-form"}>
                <div className={"form-input-container"}>
                    <label className={"form-label"} htmlFor="name">
                        Name
                    </label><span></span>
                    <input className={"form-input"} id={"name"} type="text" placeholder={"e.g John"}/>
                </div>
                <div className={"form-input-container"}>
                    <label className={"form-label"} htmlFor="email">
                        Email address
                    </label><span></span>
                    <input className={"form-input"} id="email" type="text" placeholder={"e.g. john@gmail.com"}/>
                </div>
                <div className={"form-input-container"}>
                    <label className={"form-label"} htmlFor="phone">
                        Phone number
                    </label><span></span>
                    <input className={"form-input"} id="phone" type="text" placeholder={"e.g 48 555111222"}/>
                </div>
                <button>NEXT</button>
            </form>
        </div>
    );
}

export default Form;