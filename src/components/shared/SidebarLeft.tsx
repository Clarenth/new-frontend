// Libraries
import React, { useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

// Mutators
import { useLogoutAccountMutation } from '@/lib/react-query/queriesAndMutations'

// Components
import { Button } from '../ui/button'
import { useAccountContext } from '@/context/AuthContext'
import { sidebarLinks } from '@/constants/index'
import { Icon as TablerIcon, } from '@tabler/icons-react'

interface SidebarLinkProps {
  icon: TablerIcon;
  label: string;
  // active?: boolean;
  // onClick?(): void;
  route: string;
}

const SidebarLeft = () => {
  // Hooks
  const { pathName } = useLocation();
  const navigate = useNavigate();
  const { mutateAsync: logout, isSuccess } = useLogoutAccountMutation();

  // Context
  const { account } = useAccountContext();

  /*
    TODO: render the icon of each link obj in the array found in constants/index
    apply tooltip hover with label of that NavLink
  */

  function SidebarLink({icon: Icon, label, active, onClick, pageLink}: SidebarLinkProps) {
    const { classes, cx } = useStyles();
    return (
      <Tooltip label={label} position="right" withArrow transitionProps={{ duration: 130, transition: 'fade' }} >
        <Link to={pageLink}>
          <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
            <Icon />
          </UnstyledButton>
        </Link>
      </Tooltip>
    )
  }

  function SidebarIcon({ icon: Icon, label, route,}: SidebarLinkProps) {
    return (
      <Button className=''>
        <Icon />
      </Button>
    )
  }

  useEffect(() => {
    if(isSuccess) {
      navigate(0)
    }
  }, [isSuccess])

  return (
    <nav className='leftsidebar'>
      <div className='flex flex-col gap-11'>
      <Link to="/" className='flex gap-3 items-center'>
          logo
          <img
            src='/assets/images/logo.svg'
            width={170}
            height={36}
          />
        </Link>
        <Link to={`profile/${account.email}`} className='flex gap-3 items-center'>
          account
          <img
            className='h-14 w-14 rounded-full'
          />
          <div className='flex flex-col'>
            <p className='body-bold'>
              {account.firstName + " " + account.lastName}
            </p>
            <p className='samll-regular text-light-3'>
              {account.email}
            </p>
          </div>
        </Link>
        <ul>
          { sidebarLinks.map((link) => {
            const isActive = pathName === link.route
            return (
              <li key={link.label} className={`leftsidebar-link group ${isActive && 'bg-blue-600'}`}>
              <NavLink
                to={link.route}
                className="flex gap-4 items-center p-4"
              >
                {/* <img 
                  src={link.icon}
                  alt={link.label}
                  className={`group-hover:invert-white ${isActive && 'invert-white'}`}
                /> */}
                
                {link.label}
              </NavLink>
              </li>
            )
          })}
        </ul>
      </div>

      <Button onClick={() => logout} variant="ghost" className='shad-button_ghost'>
        logout
        <img />
        <p className='small-medium lg:base-medium'>
          Logout
        </p>
      </Button>
    </nav>
  )
}

export default SidebarLeft