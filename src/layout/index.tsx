import React from "react";
import Button from "../components/Button";
import Display from "../components/Display";
import {
  ContainerButtonStyled,
  ContainerStyled,
  CalculatorStyled,
  ContainerOperatorStyled,
} from "./styles";

const Layout = () => {

  return (
    <CalculatorStyled>
        <Display />
    </CalculatorStyled>
  );
};

export default Layout;
