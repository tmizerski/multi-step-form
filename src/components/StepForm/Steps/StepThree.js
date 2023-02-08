import React, {useState} from 'react';

import "./StepThree.css";

export const addOns = [
    {
        title: "Online service",
        subtitle: "Access to multiplayer games",
        priceMonth: "+$1/mo",
        priceYear: "+$10/yr",
    },
    {
        title: "Larger storage",
        subtitle: "Extra 1TB of cloud save",
        priceMonth: "+$2/mo",
        priceYear: "+$20/yr",
    },
    {
        title: "Customizable profile",
        subtitle: "Custom theme on your profile",
        priceMonth: "+$2/mo",
        priceYear: "+$20/yr",
    },
]


function StepThree({
                    changeStep
                 }) {
const [check, setCheck] = useState(false);


    return (
        <div className={"form-side-wrapper"}>
            <h2 className={"form-side-title"}>Pick add-ons</h2>
            <span className={"form-side-subtitle"}>Add-ons help enhance your gaming experience</span>
            <form className={"form-side-form"}>
                <div className={"checkbox-section"}>
                    {addOns && addOns.map((add, k) => {
                        return <label className={"checkbox-label"} htmlFor={add.title}>
                            <div className={"checkbox-container"}>

                            <span className={"check"}>
                                <input className={"checkbox-input"}
                                       name={add.title}
                                       type={"checkbox"}
                                       checked={check}/>
                            </span>
                                <div className={"check-content"}>
                                    <span className={"card-title"}>{add.title}</span>
                                    <span className={"card-subtitle"}>{add.subtitle}</span>
                                </div>
                                <div>{add.price}</div>
                            </div>
                        </label>
                    })
                    }
                </div>
                <div className={"button-container"}>
                    <button className={"form-button-back form-button"}
                            onClick={(e)=> {
                                e.preventDefault();
                                changeStep("back");
                            }}
                    >Go Back</button>
                    <button className={"form-button"} onClick={(e) => {
                        e.preventDefault();
                        changeStep("next");
                    }}>Next Step
                    </button>
                </div>
            </form>
        </div>
    );
}

export default StepThree;