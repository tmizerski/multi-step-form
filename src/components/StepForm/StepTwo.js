import React, {useState} from 'react';
import arcade from '../../images/icon-arcade.svg';
import advanced from '../../images/icon-advanced.svg';
import pro from '../../images/icon-pro.svg';

import "./StepTwo.css";

export const planCards = [
    {
        title: "Arcade",
        priceMonth: "$9/mo",
        priceYear: "$90/yr",
        promotion: "2 months free",
        icon: arcade
    },
    {
        title: "Advanced",
        priceMonth: "$12/mo",
        priceYear: "$120/yr",
        promotion: "2 months free",
        icon: advanced
    },
    {
        title: "Pro",
        priceMonth: "$15/mo",
        priceYear: "$150/yr",
        promotion: "2 months free",
        icon: pro
    }
]

function StepTwo({checked, handleCheckPeriod}) {

    return (
        <div className={"form-side-wrapper"}>
            <h2 className={"form-side-title"}>Select your plan</h2>
            <span className={"form-side-subtitle"}>You have the option of monthly or yearly billing</span>
            <form className={"form-side-form"}>
                <div className={"radio-section"}>
                    {planCards.map((card, k) => {
                        return <div className={"plan-card"}>
                        <label className={"plan-card-label"} htmlFor={card.title}>
                            <img src={card.icon} alt={card.title}/>
                            <div className={"span-section"}>
                                <span className={"card-title"}>{card.title}</span>
                                <span className={"card-price"}>{checked === true ? card.priceYear : card.priceMonth}</span>
                                {checked && <span className={"card-promotion"}>{card.promotion}</span>}
                            </div>
                        </label>
                        <input id={card.title} name={"rad"} type="radio"/>
                    </div>})
                    }
                </div>
                <div className={"switch-section"}>
                    <span>Monthly</span>
                    <label
                        className={"switch"}
                        htmlFor={"monthOrYear"}>
                        <input id={"monthOrYear"}
                               type={"checkbox"}
                               onChange={()=>(handleCheckPeriod())}
                        />
                        <span id={"switchCircle"}></span>
                    </label>
                    <span>Yearly</span>
                </div>
                <button className={"form-button"} onClick={(e) => {
                    e.preventDefault()
                }}>Next Step
                </button>
            </form>
        </div>
    );
}

export default StepTwo;