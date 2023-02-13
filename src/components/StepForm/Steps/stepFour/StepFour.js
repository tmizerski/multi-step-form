import React from 'react';

import './StepFour.css'

function StepFour({
            changeStep,
            price,
            title,
            period,
            addons,
                  }
) {
    const setTotalPrice = () => {
        if (addons.length === 0) {
            return price;
        } else {
            let total = price.split("$")[1];
                total = parseInt(total.split("/")[0]);
                console.log(total)
            addons.forEach(add => {
                let price = add.price.split("$")[1];
                price = parseInt(price.split("/")[0]);
                total += price;
            })
            return `+$${total}/${period === "Month" ? "mo" : "yr"}`
        }

    }

    return (
        <div className={"form-side-wrapper"}>
            <h2 className={"form-side-title"}>Finishing up</h2>
            <span className={"form-side-subtitle"}>Double-check everything looks OK before confirming.</span>
            <div className={"form-side-form"}>
                <div className={"content-container"}>
                    <div className={"plan-content"}>
                        <div className={"plan-title"}>
                            <span>{`${title} (${period}ly)`}</span>
                            <button
                                className={"change-button"}
                                onClick={(e)=> {
                                    e.preventDefault();
                                    changeStep("back", 2)
                                }}
                            >Change</button>
                        </div>
                        <div className={"plan-price"}>{price}</div>
                    </div>
                    <hr style={{width: "90%", margin: "0 auto"}}/>
                    {
                        addons && addons.length > 0 && addons.map((addon, k) => <div
                            className={"addon-content"}
                            key={k}
                        >
                            <div className={"addon-title"}>{addon.title}</div>
                            <div className={"addon-price"}>{addon.price}</div>
                        </div>)
                    }
                </div>
                <div className={"price-summary"}>
                    <span className={"price-summary-title"}>{`Total (per ${period.toLowerCase()})`}</span>
                    <span className={"price-summary-totalprice"}>{setTotalPrice()}</span>
                </div>
                <div className={"button-container"}>
                    <button className={"form-button-back form-button"}
                            onClick={(e) => {
                                e.preventDefault();
                                changeStep("back");
                            }}
                    >Go Back
                    </button>
                    <button className={"form-button form-button-confirm"} onClick={(e) => {
                        e.preventDefault();
                        changeStep("next");
                    }}>Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StepFour;