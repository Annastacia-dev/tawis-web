import { RiCloseLine } from 'react-icons/ri'
import Link from 'next/link'
import { CgShoppingBag } from 'react-icons/cg';
import { BsMoonStars } from 'react-icons/bs';

const MobileMenu = ({isOpen, toggle}) => {
  return (
      isOpen && (
    <ul className='flex-col flex items-center fixed inset-0 sm:left-1/4 -left-44 bg-white/95 gap-8 justify-center p-8 md:hidden'>
      <div className='absolute right-6 top-6 scale-150'>
        <RiCloseLine onClick={toggle} />
      </div>
      <li><BsMoonStars /></li>
      <li><Link href='/#about' onClick={toggle}>About</Link></li>
      <li><Link href='/#blog' onClick={toggle}>Blog</Link></li>
      <li><Link href='/#contact' onClick={toggle}>Contact</Link></li>
      <li><Link href='/#shop' onClick={toggle}>Shop</Link></li>
      <li> <CgShoppingBag className='text-2xl' /></li>
    </ul>
      )

  )
}

export default MobileMenu