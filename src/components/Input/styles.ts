import styled from 'styled-components'

export const InputStyled = styled.input`
  max-width: 35px ;
  max-height: 10px ;
  border-radius: 5px;
  border: none;
  flex: 1 ;
  margin: 5px;
  background-color:#fff;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    
    background-color:#836FFF;
    
  }
`;

export const ContainerStyled = styled.div`
  display: flex ;
  align-items: center ;
`;

export const LabelStyled = styled.label`
  color: #fff ;
`;