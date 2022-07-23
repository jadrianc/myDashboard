import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report
} from '@mui/icons-material'

export const linksItems = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Home',
        icon: <LineStyle className='sidebarIcon' />
      },
      {
        name: 'Analitics',
        icon: <Timeline className='sidebarIcon' />
      },
      {
        name: 'Sales',
        icon: <TrendingUp className='sidebarIcon' />
      }
    ]
  },
  {
    title: 'Quick Menu',
    links: [
      {
        name: 'Users',
        icon: <PermIdentity className="sidebarIcon" />
      },
      {
        name: 'Products',
        icon: <Storefront className="sidebarIcon" />
      },
      {
        name: 'Transactions',
        icon: <AttachMoney className="sidebarIcon" />
      },
      {
        name: 'Reports',
        icon: <BarChart className="sidebarIcon" />
      }
    ]
  },
  {
    title: 'Notifications',
    links: [
      {
        name: 'Mail',
        icon: <MailOutline className="sidebarIcon" />
      },
      {
        name: 'Feedback',
        icon: <DynamicFeed className="sidebarIcon" />
      },
      {
        name: 'Messages',
        icon: <ChatBubbleOutline className="sidebarIcon" />
      }
    ]
  },
  {
    title: 'Staff',
    links: [
      {
        name: 'Manage',
        icon: <WorkOutline className="sidebarIcon" />
      },
      {
        name: 'Analytics',
        icon: <Timeline className="sidebarIcon" />
      },
      {
        name: 'Reports',
        icon: <Report className="sidebarIcon" />
      }
    ]
  }
]
