import { useState } from "react";
import Link from "next/link";
import { RiMenuFill,RiCloseLine} from 'react-icons/ri';
import { IoFlowerOutline } from 'react-icons/io5';
import { CgShoppingBag } from 'react-icons/cg';
import { BsMoonStars } from 'react-icons/bs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-sm p-">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-64">
            <div className='flex items-center justify-center'>
                <Link href="/" className="flex items-center gap-3 py-4 px-2">
                    <IoFlowerOutline className='w-8 h-8' />
                    <span className="font-bold tracking-wide">Tawi&apos;s Bloom</span>
                </Link>
            </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleNav}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <RiCloseLine className="h-6 w-6" aria-hidden="true" />
              ) : (
                <RiMenuFill className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/#about">About </Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#contact">Contact</Link>
            <Link href="/shop">Shop</Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/cart" className='py-4 px-2'><CgShoppingBag className='text-2xl' /></Link>
            <button className='py-4 px-2'> <BsMoonStars className='text-2xl' /></button>
					</div>
        </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden w-full h-screen flex justify-center items-center duration-300 ease-in-out">
          <ul className="pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2">Home</Link>
            <Link href="/about" className="block px-3 py-2">About</Link>
            <Link href="/contact" className="block px-3 py-2">Contact</Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
