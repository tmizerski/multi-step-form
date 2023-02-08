import React, {useState} from 'react';
import arcade from '../../../images/icon-arcade.svg';
import advanced from '../../../images/icon-advanced.svg';
import pro from '../../../images/icon-pro.svg';

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

function StepTwo({checked,
                     handleCheckPeriod,
                     handleRadioValue,
                     activeLabel,
                     handleChangeActiveLabel,
                     changeStep
}) {

    const handleOnRadioChange = (e) => {
        const index = parseInt(e.target.dataset.index);
        handleChangeActiveLabel(index)
    }

    return (
        <div className={"form-side-wrapper"}>
            <h2 className={"form-side-title"}>Select your plan</h2>
            <span className={"form-side-subtitle"}>You have the option of monthly or yearly billing</span>
            <form className={"form-side-form"}>
                <div className={"radio-section"}>
                    {planCards.map((card, k) => {
                        return <div key={k} className={"plan-card"}>
                        <label data-index={k} className={activeLabel === k ? "plan-card-label plan-card-label--active" : "plan-card-label"} htmlFor={card.title}>
                            <img src={card.icon} alt={card.title}/>
                            <input
                                data-index={k}
                                id={card.title}
                                name={"rad"}
                                type="radio"
                                value={checked ? card.priceYear : card.priceMonth}
                                onChange={(e)=>(handleRadioValue(e.target.value), handleOnRadioChange(e))}
                            />
                            <div className={"span-section"}>

                                <span className={"card-title"}>{card.title}</span>
                                <span className={"card-price"}>{checked === true ? card.priceYear : card.priceMonth}</span>
                                {checked && <span className={"card-promotion"}>{card.promotion}</span>}
                            </div>

                        </label>

                    </div>})
                    }
                </div>
                <div className={"switch-section"}>
                    <span style={{
                        color: !checked ? "var(--marine-blue)" : "var(--cool-gray)",
                        fontWeight: !checked ? "700" : "400"}}
                    >Monthly</span>
                    <label
                        className={"switch"}
                        htmlFor={"monthOrYear"}>
                        <input id={"monthOrYear"}
                               type={"checkbox"}
                               onChange={()=>(handleCheckPeriod())}
                        />
                        <span id={"switchCircle"}></span>
                    </label>
                    <span style={{
                        color: checked ? "var(--marine-blue)" : "var(--cool-gray)",
                        fontWeight: checked ? "700" : "400"}}
                    >Yearly</span>
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

export default StepTwo;