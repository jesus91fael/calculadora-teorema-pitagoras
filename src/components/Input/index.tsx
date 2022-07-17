import React from "react"
import { InputType } from "./interface"
import {InputStyled, ContainerStyled, LabelStyled } from "./styles"

const Input: React.FC<InputType> = ({value, label}) => {

  return(
    <ContainerStyled>
    <LabelStyled>{label}:</LabelStyled>
      <InputStyled type="text" value={value}/>
    </ContainerStyled>
  )
}

export default Input