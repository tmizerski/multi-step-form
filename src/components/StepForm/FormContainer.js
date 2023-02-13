import React, {useState} from 'react';
import "./FormContainer.css";
import StepOne from "./Steps/stepOne/StepOne";
import Sidebar from "./sidebar";
import StepTwo from "./Steps/stepTwo/StepTwo";
import StepThree from "./Steps/stepThree/StepThree";
import StepFour from "./Steps/stepFour/StepFour";
import {planCards} from "./Steps/stepTwo/StepTwo";
import StepFive from "./Steps/stepFive/StepFive";

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
    const [period, setPeriod] = useState("Month");
    const [checked, setChecked] = useState(false);
    const [planPrice, setPlanPrice] = useState();
    const [planTitle, setPlanTitle] = useState();
    const [activeLabel, setActiveLabel] = useState();

    //step three
    const [checkboxValue, setCheckboxValue] = useState([]);
    const [activeCheckbox, setActiveCheckbox] = useState([]);

    const handleCheckboxChange = (value, title, index) => {
        if(activeCheckbox.includes(index)) {
            console.log(index)
            const addons = checkboxValue.filter(element =>  element.id !== index);
            console.log(addons)
            const indexArray = activeCheckbox.filter(element => element !== index);
            console.log(indexArray)
            setCheckboxValue(addons);
            setActiveCheckbox(indexArray);
        } else {
            const addons = checkboxValue;
            addons.push({price:value, title, id: index})
            setCheckboxValue(addons);
            setActiveCheckbox([... activeCheckbox, index]);
        }
    }


    const handleChangeActiveLabel = (index) => {
        setActiveLabel(index);
    }

    const handleRadioValue = (price, title) => {
        setPlanPrice(price);
        setPlanTitle(title);
    }

    const handleCheckPeriod = () => {
        setChecked(!checked);
        if(checked) {
            setPeriod("Month")
        } else {
            setPeriod("Year")
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

    const handleChangeStep = (direction, exact) => {
        if(direction === "next" && step <= 5) {
            setStep(step+1)
        }
        if(direction === "back" && step > 0) {
            setStep(step-1)
        }
        if(exact) {
            setStep(exact)
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
            case 4: return <StepFour
                changeStep={handleChangeStep}
                price={planPrice}
                title={planTitle}
                period={period}
                addons={checkboxValue}
            />;
            break;
            case 5: return <StepFive />;
            break;

            default: return <StepFive />
        }
    }


    return (
        <div className={"form-container"}>
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