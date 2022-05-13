import React from "react";
import { Card } from "antd";

const Notification = () => {
  const approve = () => {};
  const deny = () => {};
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="HR MANAGER" bordered={false} style={{ width: 1000 }}>
        <p>
          We need to hire a new employees for our FULL STACK DEVELOPMENT TEAM
        </p>
        <br />
        <button
          style={{
            cursor: "pointer",
            backgroundColor: "green",
            color: "white",
          }}
        >
          APPROVE
        </button>
        <button
          style={{
            margin: 30,
            cursor: "pointer",
            color: "white",
            backgroundColor: "red",
          }}
        >
          DENIED
        </button>
      </Card>
      <Card
        title="HR EXECUTIVE"
        bordered={false}
        style={{ width: 1000, marginTop: 20 }}
      >
        <p>We need to hire a new employees for our DevOps Team</p>
        <br />
        <button
          style={{
            cursor: "pointer",
            backgroundColor: "green",
            color: "white",
          }}
          onClick={approve}
        >
          APPROVE
        </button>
        <button
          style={{
            margin: 30,
            cursor: "pointer",
            color: "white",
            backgroundColor: "red",
          }}
          onClick={deny}
        >
          DENIED
        </button>
      </Card>
    </div>
  );
};

export default Notification;
