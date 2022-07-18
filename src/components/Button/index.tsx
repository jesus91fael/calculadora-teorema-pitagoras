import React from "react"
import { ButtonType } from "./interface"
import { ButtonStyled } from "./styles"


const Button: React.FC<ButtonType> = ({value, type, onClick}) => {
  

  return(
    <ButtonStyled type={type} onClick={onClick} value={value}>{value} </ButtonStyled>
  )
}

export default Button