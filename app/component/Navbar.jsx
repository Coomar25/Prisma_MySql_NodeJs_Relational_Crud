'use client'
import React from 'react'
// import './css/navbar.css'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

const Navbar = () => {

  const pathname = usePathname();

  const navitems = [
    {
      label: 'Home',
      href: '/'
    },

    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'DynamicRoute',
      href: '/about/faq'
    },
    {
      label: 'Post FetchAPI',
      href: '/posts'
    }
  ]

  return (
    <div>
    {/* <!-- Header Section --> */}
    <header class="relative z-50 w-full h-24">
        <div
            class="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
            <a href="/" class="relative flex items-center inline-block h-5 h-full font-black leading-none">
                <span class="ml-3 text-xl text-gray-800">Landmark<span class="text-pink-500">.</span></span>
            </a>

            <nav id="nav"
                class="absolute top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative">
            {
              navitems.map((link, index)=>(
                <ul class="links">

                <li key={index} className='ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600' >
                  <Link href={link.href}  className={ pathname === `${link.href}` ? "text-blue-500 font-bold" : "" }    >{link.label}</Link>

                </li>
                </ul>
              ))
            }
            </nav>


        </div>
    </header>
    {/* <!-- End Header Section--> */}

    </div>
  )
}

export default Navbar