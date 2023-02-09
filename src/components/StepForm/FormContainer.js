import React, {useState} from 'react';
import "./FormContainer.css";
import StepOne from "./Steps/StepOne";
import Sidebar from "./sidebar";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";

export const steps = [
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

function FormContainer(props) {
    //first step
    const [step, setStep] = useState(1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [val, setVal] = useState(false);

    //second step
    const [period, setPeriod] = useState("month");
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState("");
    const [activeLabel, setActiveLabel] = useState();

    //step three
    const [checkboxValue, setCheckboxValue] = useState([]);
    const [activeCheckbox, setActiveCheckbox] = useState([]);

    const handleCheckboxChange = (value, index) => {
        if(activeCheckbox.includes(index)) {
            setCheckboxValue(checkboxValue.filter(element => element !==value));
            setActiveCheckbox(activeCheckbox.filter(element => element !== index));
        } else {
            setCheckboxValue([...checkboxValue, value]);
            setActiveCheckbox([... activeCheckbox, index]);
        }
    }


    const handleChangeActiveLabel = (index) => {
        setActiveLabel(index);
    }

    const handleRadioValue = (value) => {
        setRadioValue(value)
    }

    const handleCheckPeriod = () => {
        setChecked(!checked);
        if(checked) {
            setPeriod("month")
        } else {
            setPeriod("year")
        }
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

    const handleChangeStep = (direction) => {
        if(direction === "next") {
            setStep(step+1)
        }
        if(direction === "back" && step > 0) {
            setStep(step-1)
        }
    }

    const inputValidation = () => {
        setVal(true)
    }


    const renderStep = (step) => {
        switch(step) {
            case 1: return <StepOne
                getName={getName}
                getEmail={getEmail}
                getPhone={getPhone}
                email={email}
                name={name}
                phone={phone}
                val={val}
                inputValidation={inputValidation}
                changeStep={handleChangeStep}
            />
            break;
            case 2: return <StepTwo
                handleCheckPeriod={handleCheckPeriod}
                checked={checked}
                handleRadioValue={handleRadioValue}
                activeLabel={activeLabel}
                handleChangeActiveLabel={handleChangeActiveLabel}
                changeStep={handleChangeStep}
            />
            break;
            case 3: return <StepThree
                changeStep={handleChangeStep}
                period={period}
                handleCheckboxChange={handleCheckboxChange}
                activeCheckbox={activeCheckbox}
            />
            break;

            default: return <StepOne />
        }
    }


    return (
        <div className={"form-container"}>
            {activeCheckbox}
            <div className={"side-bar-container"}>
                <Sidebar stepsList={steps} currentStep={step}/>
            </div>
            <div className={"step-container"}>
                {renderStep(step)}

            </div>
        </div>
    );
}

export default FormContainer;