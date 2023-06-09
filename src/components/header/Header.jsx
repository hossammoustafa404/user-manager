import React from "react";
import Container from "../container/Container";
import { Typography } from "antd";
import HeaderWrapper from "./styles";
const { Title } = Typography;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Title className="title">users crud app</Title>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
