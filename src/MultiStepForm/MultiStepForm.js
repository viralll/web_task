import React, { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./MultiStepFormContext";
import Details from "./Details";
import Address from "./Address";
import Review from "./Review";
import ProfileDetail from "./profile";

const { Step } = Steps;

const detailsInitialState = {
  name: "",
  age: "",
  profession: ""
};

const addressInitialState = {
  degree: "",
  college: "",
  percentage: ""
};

const professionalDetail = {
  occupation: "",
  joblocation: "",
  salary: ""
};

// initial states

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <Details />;
    case 1:
      return <Address />;
    case 2:
      return <ProfileDetail />;
    case 3:
      return <Review />;
    default:
      return null;
  }
};
// render steps
const MultiStepForm = () => {
  const [details, setDetails] = useState(detailsInitialState);
  const [address, setAddress] = useState(addressInitialState);
  const [profile, setProfile] = useState(professionalDetail);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 3) {
      setCurrentStep(0);
      setDetails(detailsInitialState);
      setAddress(addressInitialState);
      setProfile(professionalDetail);
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const prev = () => setCurrentStep(currentStep - 1);

  return (
    <div className="wrapper">
      <Provider
        value={{
          details,
          setDetails,
          next,
          prev,
          address,
          setAddress,
          setProfile,
          profile
        }}
      >
        <Steps current={currentStep}>
          <Step title={"Fill in your  Personal details"} />
          <Step title={"Education details"} />
          <Step title={"Professional details"} />
          <Step title={"Review and Save"} />
        </Steps>
        <main>{renderStep(currentStep)}</main>
      </Provider>
    </div>
  );
};
export default MultiStepForm;
