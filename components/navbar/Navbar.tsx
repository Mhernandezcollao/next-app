import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
  {path: '/about', text: 'Nosotros'},
  {path: '/pricing', text: 'Precios'},
  {path: '/contact', text: 'Contacto'}
]

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <Link className='flex items-center' href='/'>
          <HomeIcon className='mr-2'/>
          <span>Home</span>
        </Link>
        <div className='flex flex-1'></div>
        {
          navItems.map((item: any) => (
            <ActiveLink key={item} {...item} />
          ))
        }
    </nav>
  )
}

