import React from 'react';
import summary from "../../../../images/icon-thank-you.svg";

import "./StepFive.css";

function StepFive(props) {
    return (
        <div className={"form-side-wrapper"}>
            <div className="summary-content">
                <img src={summary}/>
                <h2 className={"summary-title"}>
                    Thank you!
                </h2>
                <p className={"summary-text"}>
                    Thanks for confirming your subscription!
                    We hope you have fun using uor platform.
                    If you ever need support,
                    please feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </div>
    );
}

export default StepFive;