import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";

const Details = () => {
  const { address, setAddress, next, prev } = useContext(MultiStepFormContext);
  // get data
  return (
    <Formik
      initialValues={address}
      onSubmit={(values) => {
        setAddress(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.degree) errors.degree = "Degree is required";
        if (!values.percentage) errors.percentage = "Percentage is required";
        if (!values.college) errors.college = "collegeName is required";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          // display the data 
          <div className={"details__wrapper"}>
            <div className={`form__item ${errors.degree && "input__error"}`}>
              <label>Degree *</label>
              <Input name={"degree"} />
              <p className={"error__feedback"}>{errors.degree}</p>
            </div>
            <div className={`form__item`}>
              <label>CollegeName*</label>
              <Input name={"college"} />
              <p className={"error__feedback"}>{errors.college}</p>
            </div>
            <div
              className={`form__item ${errors.percentage && "input__error"}`}
            >
              <label>Percentage*</label>
              <Input name={"percentage"} type="number" />
              <p className={"error__feedback"}>{errors.percentage}</p>
            </div>
            <div
              className={
                "form__item button__items d-flex justify-content-between"
              }
            >
              {/* click handlers */}
              <Button type={"default"} onClick={prev}>
                Back
              </Button>
              <Button type={"primary"} onClick={handleSubmit}>
                Next
              </Button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default Details;
