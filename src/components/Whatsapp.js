import { BsWhatsapp } from 'react-icons/bs'
import Link from 'next/link'

const Whatsapp = () => {
  return (
    <div className='relative animate-pulse'>
      <div  className='fixed bottom-0 sm:right-0 mb-[90px] mr-1 z-50'>
        <Link title="Order via Whatsapp" href='https://wa.me/c/254705320115' target='_blank' rel='noreferrer'>
            <BsWhatsapp className='text-3xl text-black' />
        </Link>
      </div>  
    </div>
  )
}

export default Whatsapp