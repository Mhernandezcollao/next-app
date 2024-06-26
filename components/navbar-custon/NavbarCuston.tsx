"use client"

import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";


const menuItems = [
  {path: '/profile', text: 'Perfil'},
  {path: '/professional', text: 'Profesional'},
  {path: '/sports', text: 'Deportivo'},
  {path: '/others', text: 'Otros'}
]

export const NavbarCuston = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-colornavbar text-white">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      <NavbarBrand className="justify-end sm:justify-start">
        <Link className='flex items-center text-white' href='/'>
           <HomeIcon className='mr-2'/>
           <span>INICIO</span>
         </Link>
      </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
         {
           menuItems.map((item: any) => (
            <NavbarItem>
              <ActiveLink key={item} {...item} />
            </NavbarItem>
           ))
         }
      </NavbarContent>

      <NavbarMenu className="bg-black opacity-2">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <ActiveLink key={index} {...item} />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

