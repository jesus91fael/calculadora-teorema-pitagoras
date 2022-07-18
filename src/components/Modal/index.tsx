import React from "react"
import { ModalType } from "./interface"
import {
  ModalStyled,
  TitleStyled,
  ContendStyled,
  ActionStyled,
  ButtonStyled,
  ModalPageStyed,
  ModalPositionStyled,
} from "./styles"

const Modal = ({ title, description, setIsOpen }: any) => {
  return (
    <ModalPageStyed>
      <ModalPositionStyled>
        <ModalStyled>
          <div onClick={() => setIsOpen(false)} />
          <TitleStyled>
            <h2>{title}</h2>
          </TitleStyled>
          <ContendStyled>{description}</ContendStyled>
          <ActionStyled>
            <ButtonStyled
              value="Fechar"
              onClick={() => setIsOpen(false)}
              type="button"
            />
          </ActionStyled>
        </ModalStyled>
      </ModalPositionStyled>
    </ModalPageStyed>
  )
}

export default Modal
