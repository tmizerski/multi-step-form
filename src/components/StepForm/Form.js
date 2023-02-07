import React, {useRef, useState} from 'react';

function Form({
                  getName,
                  getEmail,
                  getPhone,
                  email,
                  name,
                  phone,
                  val, inputValidation}) {

    const inputNameHandler = (e) => {
        getName(e.target.value)
    }
    const inputEmailHandler = (e) => {
        getEmail(e.target.value)
    }
    const inputPhoneHandler = (e) => {
        getPhone(e.target.value)
    }

    return (
        <div className={"form-side-wrapper"}>
            {val}
            <h2 className={"form-side-title"}>Personal info</h2>
            <span className={"form-side-subtitle"}>Please provide your name, email address, and phone number.</span>
            <form className={"form-side-form"}>
                <div className={"form-input-container"}>
                    <div className={"label-container"}>
                        <label className={"form-label"} htmlFor="name">
                            Name
                        </label>
                        {val && !name &&
                            <span className={"validation-msg"}>This field is required</span>
                        }
                    </div>
                    <input
                        className={(val && !name) ? "form-input form-input--invalid" : "form-input"}
                        id={"name"}
                        type="text"
                        placeholder={"e.g John"}
                        onChange={(e)=>inputNameHandler(e)}
                    />
                </div>
                <div className={"form-input-container"}>
                    <div className={"label-container"}>
                        <label className={"form-label"} htmlFor="email">
                            Email address
                        </label>
                        {val && !email &&
                            <span className={"validation-msg"}>This field is required</span>
                        }
                    </div>
                    <input
                        className={(val && !email) ? "form-input form-input--invalid" : "form-input"}
                        id="email"
                        type="text"
                        placeholder={"e.g. john@gmail.com"}
                        onChange={(e)=>{inputEmailHandler(e)}}
                    />
                </div>
                <div className={"form-input-container"}>
                    <div className={"label-container"}>
                        <label className={"form-label"} htmlFor="phone">
                            Phone number
                        </label>
                        {val && !phone &&
                            <span className={"validation-msg"}>This field is required</span>
                        }
                    </div>
                    <input
                        className={(val && !phone) ? "form-input form-input--invalid" :"form-input"}
                        id="phone"
                        type="text"
                        placeholder={"e.g 48 555111222"}
                        onChange={(e)=>{inputPhoneHandler(e)}}
                    />
                </div>
                <button className={"form-button"} onClick={(e)=> {
                    e.preventDefault()
                    if(!name || !email || !phone) {
                        inputValidation()
                    }
                }}>Next Step</button>
            </form>
        </div>
    );
}

export default Form;