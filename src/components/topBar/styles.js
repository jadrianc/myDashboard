import styled from 'styled-components'

export const NavBar = styled.nav`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const WraperStyled = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;  
  align-items: center;
  justify-content: space-between;
`
export const ItemLeft = styled.div`

`
export const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.firstAlphaColor};
  cursor: pointer;
`

export const ItemRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px; 
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.thirdAlphaColor};

  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
`

export const Icons = styled.div`

  position: relative;
  cursor: pointer;
  margin-right: 12px;
  span{
    color: white;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: 5px;
    background-color: ${({ theme }) => theme.colors.firstColor};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }
`
