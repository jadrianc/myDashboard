import styled from 'styled-components'

export const SideBarStyled = styled.aside`
  
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.thirdColor};
  position: sticky;
  border-radius: 10px;
  top: 50px;
`

export const SidebarWrapper = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.colors.thirdAlphaColor};
`

export const SidebarMenu = styled.div`
  margin-bottom: 10px;

  h3{
    font-size: 13px;
    color: ${({ theme }) => theme.colors.firstColor};
  }
`
export const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;

`
export const SidebarListItem = styled.li`

  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;

  :hover{
    background-color: ${({ theme }) => theme.colors.linkColor};
  }

  .sidebarIcon{
    margin-right: 5px;
    font-size: 20px;
  }

  a{
    color: ${({ theme }) => theme.colors.currentLine};
    text-decoration: none;
  }
`
