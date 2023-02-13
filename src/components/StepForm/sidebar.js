import React from 'react';

function Sidebar({stepsList, currentStep}) {
    return (
        <div className={"side-bar"}>
            {stepsList && stepsList.map((step, k) => {
                return <div key={k} className={"step-number-container"}>
                    <div className={(currentStep===step.number || (currentStep === 5 && step.number === 4)) ? `step-number--active` : `step-number`}>{step.number}</div>
                    <div className={"title-container"}>
                        <div className={"step-subtitle"}>{step.subtitle.toUpperCase()}</div>
                        <div className={"step-title"}>{step.title.toUpperCase()}</div>
                    </div>
                </div>
            })
            }
        </div>
    );
}

export default Sidebar;