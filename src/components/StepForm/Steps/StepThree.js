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
                    changeStep,
                    period,
                    activeCheckbox,
                    handleCheckboxChange
                 }) {


    return (
        <div className={"form-side-wrapper"}>
            <h2 className={"form-side-title"}>Pick add-ons</h2>
            <span className={"form-side-subtitle"}>Add-ons help enhance your gaming experience</span>
            <form className={"form-side-form"}>
                <div className={"checkbox-section"}>
                    {addOns && addOns.map((add, k) => {
                        return <label key={k} className={"checkbox-label"} htmlFor={add.title}>
                            <div className={"checkbox-container"}>
                            <span className={activeCheckbox.includes(k) ? "check check-active" : "check"}>
                                <input className={"checkbox-input"}
                                       id={add.title}
                                       type={"checkbox"}
                                       checked={activeCheckbox.includes(k) ? true : false}
                                       value={period === "month" ? add.priceMonth : add.priceYear}
                                       onClick={(e) => handleCheckboxChange(e.target.value, k)}
                                />
                            </span>
                                <div className={"check-content"}>
                                    <span className={"card-title checkbox-title"}>{add.title}</span>
                                    <span className={"check-subtitle"}>{add.subtitle}</span>
                                </div>
                                <div
                                    className={"check-price"}>{period === "month" ? add.priceMonth : add.priceYear}</div>
                            </div>

                        </label>
                    })
                    }
                </div>
                <div className={"button-container"}>
                    <button className={"form-button-back form-button"}
                            onClick={(e) => {
                                e.preventDefault();
                                changeStep("back");
                            }}
                    >Go Back
                    </button>
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