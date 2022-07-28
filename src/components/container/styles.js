import styled from 'styled-components'

export const ContainerStyled = styled.main`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.thirdColor};
  border-radius: 10px; 
  padding: 10px 5px;
  margin: 0 5px 0 10px;
`

export const ContainerBody = styled.section`
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.grayColor};
  border-radius: 10px;
  margin: 10px 5px 0 10px;
  min-height: calc(100% - 50px);

`
