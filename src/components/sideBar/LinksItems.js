import { Link } from 'react-router-dom'
import { SidebarList, SidebarListItem } from './styles'
import { linksItems } from '../../data/dummy'
const LinksItems = () => {
  return (
    <>
      {linksItems.map((section) => (
        <div key={section.title}>
          <h3>{section.title}</h3>
          {
            section.links.map((link) => (
              <SidebarList>
                <SidebarListItem>
                  <Link to={link.route}>{link.icon} {link.name}</Link>
                </SidebarListItem>
              </SidebarList>
            ))
          }
        </div>
      ))}
    </>
  )
}

export default LinksItems
