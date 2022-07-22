import React from 'react'
import { NavBar, WraperStyled, ItemLeft, Logo, ItemRight } from './styles'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import LanguageIcon from '@mui/icons-material/Language'
import IconComponent from './IconComponent'
import SettingsIcon from '@mui/icons-material/Settings'
const TopBar = () => {
  return (
    <>
      <NavBar>
        <WraperStyled>
          <ItemLeft>
            <Logo>AdrianCampos</Logo>
          </ItemLeft>
          <ItemRight>
            <IconComponent icon={ <NotificationsNoneIcon /> } count={ 2 } />
            <IconComponent icon={ <LanguageIcon /> } />
            <IconComponent icon={ <SettingsIcon /> } />
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          </ItemRight>
        </WraperStyled>
      </NavBar>
    </>
  )
}

export default TopBar
