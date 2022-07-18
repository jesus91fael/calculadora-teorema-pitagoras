import React from "react"
import Button from "../components/Button"
import Display from "../components/Display"
import {
  PageStyled,
  CalculatorStyled,
} from "./styles"

const Layout = () => {

  return (
    <PageStyled>
      <CalculatorStyled>
          <Display />
      </CalculatorStyled>
    </PageStyled>
  )
}

export default Layout;
