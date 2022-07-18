import React, { useEffect, useState } from "react";
import myImage from "../../assets/pitagoras.png";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import {
  DisplayStyled,
  ImgStyled,
  ValuesStyled,
  InsertValuesStyled,
  ResultStyled,
  TitleResultadoStyled,
  LineStyled,
  TitleStyled,
} from "./styles";

const Display = () => {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [resultado, setResultado] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setValueA(valueA);
    setValueB(valueB);
    setResultado(resultado);
  }, [valueA, valueB, resultado]);

  const handleSubmit = () => {
    if (!valueA || !valueB) {
      setIsOpen(true);
      {
        isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            title="Atenção!"
            description="É necessário preencher todos os campos!"
          />
        );
      }
    }
    const regexNumber = /^[0-9]+$/;
    if (!regexNumber.test(valueA) || !regexNumber.test(valueB)) {
      setIsOpen(true);
      {
        isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            title="Atenção!"
            description="Todos os campos devem ser preenchidos com valores númericos"
          />
        );
      }
    }
    const operator = Math.hypot(parseInt(valueA), parseInt(valueB)).toFixed(2);
    setResultado(operator);
  };

  return (
    <DisplayStyled>
      <form onSubmit={handleSubmit}>
        <TitleStyled>Teorema de Pitágoras</TitleStyled>
        <InsertValuesStyled>
          <ValuesStyled>
            <Input label="A" onChange={(e) => setValueA(e.target.value)} />
            <Input label="B" onChange={(e) => setValueB(e.target.value)} />
            <Button type="button" value="=" onClick={handleSubmit} />
          </ValuesStyled>
          <ImgStyled src={myImage} alt="Teorema de Pitágoras" />
        </InsertValuesStyled>
      </form>
      <LineStyled />
      <ResultStyled>
        <TitleResultadoStyled>Resultado:</TitleResultadoStyled>
        <span>{resultado}</span>
      </ResultStyled>
      <Button
        type="button"
        value="Saiba Mais"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          title="Saiba Mais"
          description="O teorema de Pitágoras relaciona as medidas dos lados de um triângulo retângulo da seguinte maneira:
          Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos."
          
        />
      )}
    </DisplayStyled>
  );
};

export default Display;
