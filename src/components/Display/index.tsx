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
  const [isOpenString, setIsOpenString] = useState(false);
  const [isOpenNull, setIsOpenNull] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);

  useEffect(() => {
    setValueA(valueA);
    setValueB(valueB);
    setResultado(resultado);
  }, [valueA, valueB, resultado]);

  const handleSubmit = () => {
    const regexNumber = /^[0-9]+$/;
    if (!valueA || !valueB) {
      setIsOpenNull(true);
    } else if (!regexNumber.test(valueA) || !regexNumber.test(valueB)) {
      setIsOpenString(true);
      setIsOpenNull(false);
    } else {
      const operator = Math.hypot(parseInt(valueA), parseInt(valueB)).toFixed(
        2
      );
      setResultado(operator);
    }
  };

  const clear = () =>{
    setResultado('')
    setValueA('');
    setValueB('');
  }

  return (
    <DisplayStyled>
      <form onSubmit={handleSubmit}>
        <TitleStyled>Teorema de Pitágoras</TitleStyled>
        <InsertValuesStyled>
          <ValuesStyled>
            <Input label="A" onChange={(e) => setValueA(e.target.value)} />
            <Input label="B" onChange={(e) => setValueB(e.target.value)} />
            <Button type="button" value="=" onClick={handleSubmit} />
            {isOpenString && (
              <Modal
                setIsOpen={setIsOpenString}
                title="Atenção!"
                description="Todos os campos devem ser preenchidos com valores númericos"
              />
            )}
            {isOpenNull && (
              <Modal
                setIsOpen={setIsOpenNull}
                title="Atenção!"
                description="É necessário preencher todos os campos!"
              />
            )}
          </ValuesStyled>
          <ImgStyled src={myImage} alt="Teorema de Pitágoras" />
        </InsertValuesStyled>

        <LineStyled />
        {resultado && (
          <ResultStyled>
            <TitleResultadoStyled>Resultado:</TitleResultadoStyled>
            <span>{resultado}</span>
          </ResultStyled>
        )}

        <Button
          type="button"
          value="Saiba Mais"
          onClick={() => setIsOpenInfo(true)}
        />
        {isOpenInfo && (
          <Modal
            setIsOpen={setIsOpenInfo}
            title="Saiba Mais"
            description="O teorema de Pitágoras relaciona as medidas dos lados de um triângulo retângulo da seguinte maneira:
          Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos."
          />
        )}
        <Button type="reset" value="Limpar" onClick={clear}/>
      </form>
    </DisplayStyled>
  );
};

export default Display;
