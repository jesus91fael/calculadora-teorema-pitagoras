import styled from 'styled-components'

export const DisplayStyled = styled.div`
  width: 300px;
  height: 200px ;
  display: flex ;
  flex-direction: column ;
  background-color:#363636;
  align-items: center ;
  justify-content: center ;
	margin: 5px auto;
	border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ImgStyled = styled.img`
  width: 100px; 
  height: 80px; 
`;

export const TitleStyled = styled.span`
 font-size: 12px ;
 font-weight: normal ;
`;

export const InsertValuesStyled = styled.div`
  display : flex ;
  height: 130px ;
  justify-content: space-between;
  flex-direction: row ;
  align-items: center ;
`;

export const ValuesStyled = styled.div`
  display: flex ;
  flex-direction: column ;
  margin: 5px ;
`;

export const LineStyled = styled.hr`
  width: 200px ;
`;

export const ResultStyled = styled.div`
  display: flex ;
  width: 200px ;
  flex-direction: column ;
  justify-content: center ;
  align-items: center ;
  margin: 2px ;
  border-radius: 5px ;
  color: #fff ;
  font-weight: bold ;
  text-align: center ;
  
`;

