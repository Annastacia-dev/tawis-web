import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiMenuFill } from 'react-icons/ri';
import { CgShoppingBag } from 'react-icons/cg';
import { BsMoonStars } from 'react-icons/bs';
import MobileMenu from './MobileMenu';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <nav className='bg-white fixed w-full shadow-sm flex space-x-64  p-4 items-center z-10'>
      <div className='flex items-center'>
        <Image src='/logo.png' alt = "logo" width={40} height={40}/>
      </div>
      <div className='absolute right-6 md:hidden top-6 scale-150'>
        <RiMenuFill onClick={toggle} />
      </div>
      <ul className='hidden md:flex gap-8 font-poly text-base tracking-wide '>
        <li><Link href='/#about'>About</Link></li>
        <li><Link href='/#blog'>Blog</Link></li>
        <li><Link href='/#contact'>Contact</Link></li>
        <li><Link href='/#shop'>Shop</Link></li>
        <li className='ml-32'>
          <CgShoppingBag className='text-2xl' />
        </li>
        <li>
          <BsMoonStars className='text-2xl' />
        </li>
      </ul>
      <MobileMenu isOpen={isOpen} toggle={toggle} /> 
    </nav>
  )
}

export default NavBar