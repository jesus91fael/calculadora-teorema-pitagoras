import React, { useEffect, useState } from "react";
import myImage from "../../assets/pitagoras.png";
import Button from "../Button";
import Input from "../Input";
import {
  DisplayStyled,
  ImgStyled,
  ValuesStyled,
  InsertValuesStyled,
  ResultStyled,
  TitleStyled,
  LineStyled,
} from "./styles";

const Display = () => {

  const [valueA, setValueA] = useState('')
  const [valueB, setValueB] = useState('')
  const [resultado, setResultado] = useState('')

 useEffect(()=>{
  setValueA(valueA)
  setValueB(valueB)
  setResultado(resultado)
 },[valueA,valueB, resultado])

  const handleSubmit = () =>{

    if(!valueA || !valueB ){
      alert('É necessário preencher todos os campos!')
    }
    const regexNumber = /^[0-9]+$/
    if (!regexNumber.test(valueA) || !regexNumber.test(valueB)){
      alert('Todos os campos devem ser preenchidos com valores númericos')
    }
    const operator = Math.hypot(JSON.parse(valueA), JSON.parse(valueB)).toFixed(2)
    setResultado(operator)
  }

  return (
    <DisplayStyled>
      <form onSubmit={handleSubmit}>
      {/* <h1>Teorema de Pitágoras</h1> */}
      <InsertValuesStyled>
        
        <ValuesStyled>
          <Input label="A" onChange={e => setValueA(e.target.value)}/>
          <Input label="B" onChange={e => setValueB(e.target.value)} />
          <Button type="button" value='=' onClick={handleSubmit}/>
        </ValuesStyled>
        <ImgStyled src={myImage} alt="Teorema de Pitágoras" />
      </InsertValuesStyled>
      </form>
      <LineStyled />
      <ResultStyled>
        <TitleStyled>Resultado:</TitleStyled>
        <span>{resultado}</span>
      </ResultStyled>
    </DisplayStyled>
  );
};

export default Display;
