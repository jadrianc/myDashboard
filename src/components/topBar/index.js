import React from 'react'
import { NavBar, WraperStyled, ItemLeft, Logo, ItemRight, Icons } from './styles'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

const TopBar = () => {
  return (
    <>
      <NavBar>
        <WraperStyled>
          <ItemLeft>
            <Logo>AdrianCampos</Logo>
          </ItemLeft>
          <ItemRight>
            <Icons>
              <NotificationsNoneIcon />
              <span>2</span>
            </Icons>
          </ItemRight>
        </WraperStyled>
      </NavBar>
    </>
  )
}

export default TopBar
