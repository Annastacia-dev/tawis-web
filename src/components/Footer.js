import Link from 'next/link'
import { GrFacebookOption } from 'react-icons/gr'
import { MdWhatsapp } from 'react-icons/md'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiCopyrightLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='flex flex-col mt-20 text-md'>
        <div className='w-full bg-white'>
          <div className='flex justify-center items-center gap-8'>
            <Link href="/privacypolicy" className='capitalize mr-4'>privacy policy</Link>
            <div className="h-2 w-2 rounded-full bg-black"></div>
            <Link href="/termsandconditions" className='capitalize mx-4'>terms &amp; conditions</Link>
            <div className="h-2 w-2 rounded-full bg-black"></div>
            <Link href="/returnpolicy" className='capitalize mx-4'>return policy</Link>
            <div className="h-2 w-2 rounded-full bg-black"></div>
            <Link href="/shippinganddelivery" className='capitalize mx-4'>shipping &amp; delivery</Link>
          </div>

        </div>
        <div className='w-full bg-black text-white mt-10'>
          <div className='flex justify-center items-center gap-8 mt-10 mb-4'>
            <Link href="https://www.facebook.com/">
              <GrFacebookOption className='text-2xl' />
            </Link>
            <Link href="https://www.instagram.com/">
              <AiOutlineInstagram className='text-2xl' />
            </Link>
            <Link href="https://wa.me/254722000000">
              <MdWhatsapp className='text-2xl' />
            </Link>
          </div> 
          <div className='flex justify-center items-center gap-8 mt-10 mb-6'>
            <p className='uppercase'>tawi&apos;s bloom</p>
            <p className='uppercase'>|</p>
            <p className='uppercase flex justify-center items-center gap-3'>
              <RiCopyrightLine className='text-xs' /> {new Date().getFullYear()} 
            </p>
            <p className='uppercase'>|</p>
            <p className='uppercase'>all rights reserved</p>
          </div>
        </div>  
    </div>
  )
}

export default Footer
