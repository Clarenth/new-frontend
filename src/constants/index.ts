import { 
  Icon as TablerIcon,
  IconFiles, 
  IconHome2,
  IconMail, 
  IconFileSearch,
  Icon3dCubeSphere,
  IconFingerprint,
  // IconAccessPoint, 
} from '@tabler/icons-react'

export const sidebarLinks =
[
  { label: 'Home', icon: IconHome2, route: '/' },
  { label: 'Documents', icon: IconFiles, route: '/docs' },
  { label: 'Search', icon: IconFileSearch, route: '/search' },
  { label: 'Communications', icon: IconMail, route: '/chat' },
  { label: 'AI Overlord', icon: Icon3dCubeSphere, route: '/ai' },
  { label: 'Account', icon: IconFingerprint, route: '/account' },
  // { label: 'Signup/Signin', icon: IconAccessPoint, route: '/login' },
  
]