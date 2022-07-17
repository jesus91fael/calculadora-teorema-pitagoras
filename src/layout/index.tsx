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
      <ContainerStyled>
        <ContainerButtonStyled>
          <Button value="1" />
          <Button value="2" />
          <Button value="3" />
          <Button value="4" />
          <Button value="5" />
          <Button value="6" />
          <Button value="7" />
          <Button value="8" />
          <Button value="9" />
          <Button value="0" />
        </ContainerButtonStyled>
        <ContainerOperatorStyled>
          <Button value="delete" />
          <Button value="CE" />
          <Button value="Sobre" />
          <Button value="=" />
        </ContainerOperatorStyled>
      </ContainerStyled>
    </CalculatorStyled>
  );
};

export default Layout;
