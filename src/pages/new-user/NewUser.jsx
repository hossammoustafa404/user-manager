import React, { useState } from "react";
import NewWrapper from "./styles";
import Container from "../../components/container/Container";
import { Button, Form, Input, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewUser = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFinish = async (values) => {
    setLoading(true);
    await axios.post("http://localhost:5000/api/v1/users", values);
    setLoading(false);
  };

  return (
    <NewWrapper>
      <Container>
        <Button
          htmlType="button"
          onClick={() => navigate("/")}
          className="back-btn"
        >
          back to users
        </Button>
        <Form layout="vertical" onFinish={handleFinish}>
          {/* Name */}
          <Form.Item name="name" label="name">
            <Input placeholder="The name must not exceed 20 characters" />
          </Form.Item>

          {/* Email */}
          <Form.Item name="email" label="email">
            <Input placeholder="The name must not exceed 50 characters" />
          </Form.Item>

          {/* Email */}
          <Form.Item name="gender" label="gender">
            <Radio.Group>
              <Radio value="male">male</Radio>
              <Radio value="female">female</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Status */}
          <Form.Item name="status" label="status">
            <Radio.Group>
              <Radio value="inactive">inactive</Radio>
              <Radio value="active">active</Radio>
            </Radio.Group>
          </Form.Item>

          <Button
            htmlType="submit"
            block
            className="submit-btn"
            loading={loading}
          >
            save
          </Button>
        </Form>
      </Container>
    </NewWrapper>
  );
};

export default NewUser;
