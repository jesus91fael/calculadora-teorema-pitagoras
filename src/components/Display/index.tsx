import React from "react"
import myImage from '../../assets/pitagoras.png'
import Input from "../Input"
import { DisplayStyled, ImgStyled, ValuesStyled, InsertValuesStyled, ResultStyled, TitleStyled, LineStyled } from "./styles"

const Display = () => {

  return(
    <DisplayStyled >
      <InsertValuesStyled>
        <ValuesStyled>
          <Input label="A"/>
          <Input label="B"/>
          <Input label="C"/>
        </ValuesStyled>
        <ImgStyled src={myImage} alt="Teorema de Pitágoras"/>
      </InsertValuesStyled>
      <LineStyled/>
      <ResultStyled>
        <TitleStyled>Resultado:</TitleStyled>
        <span>Ola</span>
      </ResultStyled>
      
    </DisplayStyled>
  )
}

export default Display