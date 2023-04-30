import React, { useEffect, useState } from "react";
import HomeWrapper from "./styles";
import Container from "../../components/container/Container";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();

  const navigate = useNavigate();
  const columns = [
    {
      title: "Id",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "action",
      render: (_, { key }) => {
        return (
          <>
            <Button
              htmlType="button"
              className="edit-btn"
              onClick={() => navigate(`/newuser`)}
            >
              edit
            </Button>
            <Button htmlType="button" className="delete-btn">
              delete
            </Button>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  let dataSource = [];
  if (data) {
    const { users } = data;
    dataSource = users.map(({ name, email, gender, status }, index) => ({
      key: index + 1,
      name,
      email,
      gender,
      status,
    }));
  }

  return (
    <HomeWrapper>
      <Container>
        <Button
          htmlType="button"
          className="add-btn"
          onClick={() => navigate("/newuser")}
        >
          new user
        </Button>
        <Table
          dataSource={dataSource}
          columns={columns}
          scroll={{ x: 768 }}
          pagination={{ pageSize: 10 }}
        />
      </Container>
    </HomeWrapper>
  );
};

export default Home;
