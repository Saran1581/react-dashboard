import React, { useState } from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, removeNumber } from "../../redux/actions/profileActions";
import "./index.css";

const Profile = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state?.profileReducer?.number);

  const addFunction = () => {
    dispatch(addNumber());
  };
  const removeFunction = () => {
    if (number !== 0) dispatch(removeNumber());
  };

  return (
    <div className="LeftContent">
      <h3>Total </h3> {number} <br />
      <Button onClick={addFunction}>Add</Button>
      <Button onClick={removeFunction}>Remove</Button>
    </div>
  );
};
export default Profile;
