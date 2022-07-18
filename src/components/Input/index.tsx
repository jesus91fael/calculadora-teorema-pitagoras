import React from "react"
import { InputType } from "./interface"
import {InputStyled, ContainerStyled, LabelStyled } from "./styles"

const Input: React.FC<InputType> = ({value, label, onChange}) => {

  return(
    <ContainerStyled>
    <LabelStyled>{label}:</LabelStyled>
      <InputStyled type="text" onChange={onChange} value={value}/>
    </ContainerStyled>
  )
}

export default Input