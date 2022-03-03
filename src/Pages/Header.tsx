import * as React from "react";
import "./Styles/header.css";
import logo from "../assets/acertus_logo.png";
import { Header } from "antd/lib/layout/layout";
import { Button, Dropdown, Menu } from "antd";
import { Col, Row } from "antd/es/grid";
import UserOutlined from "@ant-design/icons";
interface HeaderProps {}

const MyHeader: React.FunctionComponent<HeaderProps> = () => {
  const userProfileMenu = (
    <Menu key="menu_bar">
      <Menu.Item key="1">
        <Button key="logout" type="link">
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Header className="header-order-div">
        <Row>
          <Col>
            <img src={logo} className="brand-logo" alt="Vinlocity logo" />
            <h5>Logout</h5>
          </Col>
          {/* <Col>
            <span className="logged-user">Hi (admin)</span>
          </Col>
          <Col className="dropdown-menu" span={1}>
            <Dropdown overlay={userProfileMenu} trigger={["click"]}>
              <a
                href="#"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <UserOutlined />
              </a>
            </Dropdown>
          </Col> */}
        </Row>
      </Header>
    </div>
  );
};

export default MyHeader;
