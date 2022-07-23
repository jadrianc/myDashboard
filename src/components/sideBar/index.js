
import { SideBarStyled, SidebarWrapper, SidebarMenu } from './styles'
import LinksItems from './LinksItems'
const SideBar = () => {
  return (

    <SideBarStyled>
      <SidebarWrapper>
        <SidebarMenu>
          <LinksItems />
        </SidebarMenu>
      </SidebarWrapper>
    </SideBarStyled>
  )
}

export default SideBar
