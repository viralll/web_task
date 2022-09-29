import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";

const Profile = () => {
  const { profile, setProfile, next, prev } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={profile}
      onSubmit={(values) => {
        setProfile(values);
        next();
      }}
      // initial validation
      validate={(values) => {
        const errors = {};
        if (!values.occupation) errors.occupation = "Occupation is required";
        if (!values.joblocation) errors.joblocation = "joblocation is required";
        if (!values.salary) errors.salary = "salary is required";
        if (/^[0-9]+$/.test(values.occupation))
          errors.occupation =
            "occupation does not require numbers or special characters";

        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
            <div
              className={`form__item ${errors.occupation && "input__error"}`}
            >
              <label>occupation *</label>
              <Input name={"occupation"} />
              <p className={"error__feedback"}>{errors.occupation}</p>
            </div>
            <div
              className={`form__item ${errors.joblocation && "input__error"}`}
            >
              <label>joblocation *</label>
              <Input name={"joblocation"} />
              <p className={"error__feedback"}>{errors.joblocation}</p>
            </div>
            <div className={`form__item ${errors.salary && "input__error"}`}>
              <label>salary *</label>
              <InputNumber name={"salary"} />

              <p className={"error__feedback"}>{errors.salary}</p>
            </div>
            <div
              className={
                "form__item button__items d-flex justify-content-between"
              }
            >
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
export default Profile;
