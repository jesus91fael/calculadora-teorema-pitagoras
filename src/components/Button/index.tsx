import React from "react"
import { ButtonType } from "./interface"
import { ButtonStyled } from "./styles"

const Button: React.FC<ButtonType> = ({value}) => {

  return(
    <ButtonStyled type="button" value={value}>{value}</ButtonStyled>
  )
}

export default Button