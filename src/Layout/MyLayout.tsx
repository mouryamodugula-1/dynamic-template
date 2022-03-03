import * as React from "react";
import Header from "./../Pages/Header";
//import Login from "./../Pages/Login";
import Footer from "./../Pages/Footer";
import Template from "./../Pages/Template";
import SearchField from "../Pages/SearchField";
import "./Styles/layout.css";
import { Button, Col, Form, Input, InputNumber, Row } from "antd";

interface MyLayoutProps {}

const MyLayout: React.FunctionComponent<MyLayoutProps> = () => {
  return (
    <div>
      <Header />
      <h2 className="center">My Template </h2>
      <Row justify="space-around">
        <Col span={12}>
          {/* <Login /> */}

          <Form>
            <Form.Item
              label="Name"
              rules={[{ required: true }]}
              tooltip="This is a required field"
            >
              <Input />
            </Form.Item>
            <Form.Item name={["user", "website"]} label="Template Code">
              <Input />
            </Form.Item>
            <Form.Item name={["user", "introduction"]} label="Template">
              <Template />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}>
          <SearchField />
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default MyLayout;
