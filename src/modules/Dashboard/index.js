import React from "react";
import {
  Card,
  Col,
  Row,
  DownOutlined,
  Progress,
  Tooltip,
  Button,
  Menu,
  Dropdown,
  message,
} from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "./partials/styles.css";
const Dashboard = () => {
  const Calc = (total, percent) => {
    return Math.round((100 * percent) / total);
  };

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Projects Active</Menu.Item>
      <Menu.Item key="2">Projects completed</Menu.Item>
    </Menu>
  );
  return (
    <div
      className="site-card-border-less-wrapper"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      <Card
        title="Human Resource"
        bordered={false}
        style={{ width: 250, height: 300, margin: "auto" }}
      >
        <p>Managers - 2</p> <p>Executives - 7</p>{" "}
        <p>
          <b>Total - 9</b>
        </p>
        <div>
          <Tooltip title="2 HR MANAGERS">
            <Progress percent={Calc(9, 2)} success={{ percent: Calc(9, 2) }} />
          </Tooltip>

          <Tooltip title="8 HR EXECUTIVES">
            <Progress percent={Calc(9, 7)} success={{ percent: Calc(9, 7) }} />
          </Tooltip>
        </div>
      </Card>
      <Card
        title="Engineering"
        bordered={false}
        style={{ width: 250, height: 300, margin: "auto" }}
      >
        <p>Managers - 4</p> <p>Team Leads - 8</p> <p>Engineers - 45 </p>
        <p>
          <b>Total - 64 </b>
        </p>
        <div>
          <Tooltip title="4 MANAGERS">
            <Progress
              percent={Calc(64, 4)}
              success={{ percent: Calc(64, 4) }}
            />
          </Tooltip>

          <Tooltip title="8 TEAM LEAD">
            <Progress
              percent={Calc(64, 8)}
              success={{ percent: Calc(64, 8) }}
            />
          </Tooltip>

          <Tooltip title="45 ENGINEERS">
            <Progress
              percent={Calc(64, 45)}
              success={{ percent: Calc(64, 45) }}
            />
          </Tooltip>
        </div>
      </Card>
      <Card
        title="Devops"
        bordered={false}
        style={{ width: 250, height: 300, margin: "auto" }}
      >
        <p>Managers - 2</p> <p>Team Leads - 3</p> <p>Engineers - 14 </p>
        <p>
          <b>Total - 26</b>
        </p>
        <div>
          <Tooltip title="2 MANAEGRS">
            <Progress
              percent={Calc(26, 2)}
              success={{ percent: Calc(26, 2) }}
            />
          </Tooltip>

          <Tooltip title="3 TEAM LEADS">
            <Progress
              percent={Calc(26, 3)}
              success={{ percent: Calc(26, 3) }}
            />
          </Tooltip>

          <Tooltip title="14 ENGINEERS">
            <Progress
              percent={Calc(26, 14)}
              success={{ percent: Calc(26, 14) }}
            />
          </Tooltip>
        </div>
      </Card>
      <Card
        title="Customer Support"
        bordered={false}
        style={{ width: 250, height: 300, margin: "auto" }}
      >
        <p>Managers - 4</p> <p>Executives - 8</p>
        <p>
          <b>Total - 12</b>
        </p>
        <div>
          <Tooltip title="4 MANAGERS">
            <Progress
              percent={Calc(12, 4)}
              success={{ percent: Calc(12, 4) }}
            />
          </Tooltip>

          <Tooltip title="8 EXECUTIVES">
            <Progress
              percent={Calc(12, 8)}
              success={{ percent: Calc(12, 8) }}
            />
          </Tooltip>
        </div>
      </Card>
      <br />

      <Card
        title="PROGRESS"
        bordered={false}
        style={{ width: 1100, marginTop: 40, marginLeft: 30 }}
      >
        <h4>Team 1 progress:</h4>
        <Progress percent={80} steps={8} />
        <br />
        <h4>Team 2 progress:</h4>
        <Progress percent={30} steps={3} />
        <br />
        <h4>Team 3 progress:</h4>
        <Progress percent={100} steps={10} strokeColor="#52c41a" />
      </Card>

      <div className="site-card-border-less-wrapper">
        <Card
          title="PROJECTS"
          bordered={false}
          style={{ width: 1100, marginTop: 40 }}
        >
          <Dropdown overlay={menu}>
            <Button>Project</Button>
          </Dropdown>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
