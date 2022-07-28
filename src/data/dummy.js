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
        icon: <LineStyle className='sidebarIcon' />,
        route: '/home'
      },
      {
        name: 'Analitics',
        icon: <Timeline className='sidebarIcon' />,
        route: '/home'
      },
      {
        name: 'Sales',
        icon: <TrendingUp className='sidebarIcon' />,
        route: '/home'
      }
    ]
  },
  {
    title: 'Quick Menu',
    links: [
      {
        name: 'Users',
        icon: <PermIdentity className="sidebarIcon" />,
        route: '/home'
      },
      {
        name: 'Products',
        icon: <Storefront className="sidebarIcon" />,
        route: '/home'
      },
      {
        name: 'Transactions',
        icon: <AttachMoney className="sidebarIcon" />,
        route: '/home'
      },
      {
        name: 'Reports',
        icon: <BarChart className="sidebarIcon" />,
        route: '/home'
      }
    ]
  },
  {
    title: 'Notifications',
    links: [
      {
        name: 'Mail',
        icon: <MailOutline className="sidebarIcon" />,
        route: '/home'
      },
      {
        name: 'Feedback',
        icon: <DynamicFeed className="sidebarIcon" />,
        route: '/home'
      },
      {
        name: 'Messages',
        icon: <ChatBubbleOutline className="sidebarIcon" />,
        route: '/home'
      }
    ]
  },
  {
    title: 'Staff',
    links: [
      {
        name: 'Manage',
        icon: <WorkOutline className="sidebarIcon" />,
        route: '/home'
      },
      {
        name: 'Analytics',
        icon: <Timeline className="sidebarIcon" />,
        route: '/home'
      },
      {
        name: 'Reports',
        icon: <Report className="sidebarIcon" />,
        route: '/home'
      }
    ]
  }
]
