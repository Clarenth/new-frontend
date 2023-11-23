// Libraries
import React, { useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

// Mutators
import { useLogoutAccountMutation } from '@/lib/react-query/queriesAndMutations'

// Components
import { Button } from '../ui/button'
import { useAccountContext } from '@/context/AuthContext'
import { sidebarLinks } from '@/constants/index'

const SidebarLeft = () => {
  // Hooks
  const { pathName} = useLocation();
  const navigate = useNavigate();
  const { mutateAsync: logout, isSuccess } = useLogoutAccountMutation();

  // Context
  const { account } = useAccountContext();

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
              <li key={link.label} className={`leftsidebar-link group ${isActive && 'bg-primary-500'}`}>
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