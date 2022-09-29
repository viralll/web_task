import { Button, Col, Row, Modal } from "antd";
import React, { useContext, useState } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import Printer, { print } from "react-pdf-print";

const Review = () => {
  const { details, address, next, prev, profile } =
    useContext(MultiStepFormContext);
  const ids = ["1"];

  const showModal = () => {
    alert("you are confirming the details");
  };

  return (
    <div className={"details__wrapper"}>
      <div
        className={"form__item button__items d-flex justify-content-between"}
      >
        <Button type={"default"} onClick={prev}>
          Back
        </Button>
        <Button type={"primary"} onClick={showModal}>
          Confirm
        </Button>
        <Button type={"primary"} onClick={() => print(ids)}>
          Export the details
        </Button>
      </div>
      <Row>
        {/* display data  */}
        <Printer>
          <div
            id={ids[0]}
            style={{ width: "210mm", height: "297mm", alignContent: "center" }}
          >
            <Col span={24}>
              <h1>Personal Details</h1>
              <p>Name: {details.name}</p>
              <p>Age: {details.age}</p>
              <p>Profession: {details.profession}</p>
            </Col>
            <Col span={24}>
              <h1>Education Details</h1>
              <p>Degree: {address.degree}</p>
              <p>College Name: {address.college}</p>
              <p>Percentage: {address.percentage}</p>
            </Col>
            <Col span={24}>
              <h1>Professional Detail</h1>
              <p>Occupation: {profile.occupation}</p>
              <p>job location: {profile.joblocation}</p>
              <p>Salary: {profile.salary}</p>
            </Col>
          </div>
        </Printer>
      </Row>
    </div>
  );
};
export default Review;
