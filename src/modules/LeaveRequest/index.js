import React from "react";
import { Card, Button, button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  addNumber,
  removeNumber,
} from "../../redux/actions/leaveRequestActions";

const LeaveRequest = () => {
  const dispatch = useDispatch();
  const number = useSelector((leave) => leave.LeaveRequest.number);

  const addFunction = () => {
    if (number !== 3) dispatch(addNumber());
  };

  const removeFunction = () => {
    if (number !== 0) dispatch(removeNumber());
  };
  return (
    <Card
      title="LEAVE REQUEST"
      bordered={false}
      style={{ width: 1000, marginTop: 20 }}
    >
      <p>Name: </p>
      <br />
      <p>Department: </p>
      <br />
      <p>Casual/Sick Leave: </p>
      <br />
      <p>Reason: </p>
      <br />
      <p>No of Leave taken: {number} </p>
      <br />
      <button onClick={addFunction}>ADD</button>
      <button onClick={removeFunction}>REMOVE</button>
      <br />
      <Button
        style={{
          cursor: "pointer",
          color: "white",
          backgroundColor: "green",
          boxSizing: 30,
        }}
      >
        APPROVE
      </Button>
      <Button
        style={{
          margin: 30,
          cursor: "pointer",
          backgroundColor: "red",
          color: "white",
        }}
      >
        DENIED
      </Button>
    </Card>
  );
};
export default LeaveRequest;
