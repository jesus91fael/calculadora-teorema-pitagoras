import styled from 'styled-components'
import Button from '../Button';

export const ModalPageStyed = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const ModalPositionStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const ModalStyled = styled.div`
  min-width: 250px;
  min-height: 170px;
  padding: 10px;
  background: white;
  color: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  display: flex ;
  flex-direction: column;
  justify-content: center ;
  align-items: center ;
`;

export const TitleStyled = styled.div`
  margin: 0;
  padding: 10px;
  color: #2c3e50;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

export const ContendStyled = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #2c3e50;
  text-align: center;
`;

export const ActionStyled = styled.div`
  text-align: center ;
  bottom: 2px;
  margin-bottom: 10px;
  width: 100%;
`;

export const ButtonStyled = styled(Button)`
 cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  color: #2c3e50;
  transition: all 0.25s ease;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  right: 0;
  top: 0;
  margin-top: -7px;
  margin-right: -7px;
`;
