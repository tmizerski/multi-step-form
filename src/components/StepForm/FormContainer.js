import React from 'react';
import "./FormContainer.css";
import Form from "./Form";

function FormContainer(props) {

    const steps = [
        {
            number: 1,
            subtitle: "step 1",
            title: "your info"
        }, {
            number: 2,
            subtitle: "step 2",
            title: "select plan"
        }, {
            number: 3,
            subtitle: "step 3",
            title: "add-ons",
        }, {
            number: 4,
            subtitle: "step 4",
            title: "summary"
        }]
    return (
        <div className={"form-container"}>
            <div className={"side-bar-container"}>
                <div className={"side-bar"}>
                    {steps && steps.map((step, k) => {
                        return <div className={"step-number-container"}>
                            <div className={"step-number"}>{step.number}</div>
                            <div className={"title-container"}>
                                <div className={"step-subtitle"}>{step.subtitle.toUpperCase()}</div>
                                <div className={"step-title"}>{step.title.toUpperCase()}</div>
                            </div>
                        </div>
                    })
                    }
                </div>
            </div>
            <div className={"step-container"}>
                <Form/>
            </div>
        </div>
    );
}

export default FormContainer;