import React, {useState} from 'react';
import "./FormContainer.css";
import StepOne from "./StepOne";
import Sidebar from "./sidebar";
import StepTwo from "./StepTwo";

function FormContainer(props) {
    //first step
    const [step, setStep] = useState(1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [val, setVal] = useState(false);

    //second step
    const [period, setPeriod] = useState("monthly");
    const [checked, setChecked] = useState(false);


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

    const handleCheckPeriod = () => {
        setChecked(!checked);
    }

    const getName = (value) => {
        setName(value)
    }

    const getPhone = (value) => {
        setPhone(value)
    }

    const getEmail = (value) => {
        setEmail(value)
    }

    const inputValidation = () => {
        setVal(true)
        setStep(step+1)
    }

    return (
        <div className={"form-container"}>
            <div className={"side-bar-container"}>
                <Sidebar stepsList={steps} currentStep={step}/>
            </div>
            <div className={"step-container"}>
                <StepTwo
                    handleCheckPeriod={handleCheckPeriod}
                    checked={checked}
                />
            </div>
        </div>
    );
}

export default FormContainer;