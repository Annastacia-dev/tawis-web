import Link from 'next/link'
import Image from 'next/image'
import bestSellers from '../data/bestSellers'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { numberDelimeter } from '@/utils/numberDelimeter'

const BestSellers = () => {
  return (
    <div className='relative mt-20' id="best-sellers">
      <div className='sm:absolute sm:top-72 flex flex-col gap-4'>
        <h1 className='font-playfair capitalize text-3xl'>Best Sellers</h1>
        <Link className='uppercase underline' href='/shop'> Shop all &rarr;</Link>
      </div>
      <div className="border-l border-black  sm:h-[700px] mx-4 sm:ml-80 hidden sm:block"></div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-16 sm:mt-4 mt-32 absolute top-0 sm:left-96'>
        {bestSellers.map((bestSeller) => (
          <div key={bestSeller.id} className='flex flex-col gap-2'>
              <Image src={bestSeller.url} alt={bestSeller.name} width={100} height={100} className="h-56 w-56 object-cover" />
              <h1 className='capitalize font-bold text-base mt-4'>{bestSeller.name}</h1>
              <div className='flex items-center gap-6'>
              <p className='text-sm'>Ksh {numberDelimeter(bestSeller.price)}</p>
              <div href='/shop' className='border border-black py-1 px-4'> 
                <MdOutlineAddShoppingCart className='text-base' />
              </div>
              </div> 
          </div>
        ))}
        </div>
    </div>
  )
}

export default BestSellers