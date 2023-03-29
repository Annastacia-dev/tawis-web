import Link from 'next/link'
import Image from 'next/image'
import bestSellers from '../data/bestSellers'

const BestSellers = () => {
  return (
    <div className='relative mt-20'>
      <div className='sm:absolute sm:top-32 flex flex-col gap-4'>
        <h1 className='font-playfair capitalize text-3xl'>Best Sellers</h1>
        <Link className='uppercase underline' href='/shop'> Shop all &rarr;</Link>
      </div>
      <div className="border-l border-black  h-screen mx-4 sm:ml-80"></div>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center sm:gap-4 sm:mt-20'>
        {bestSellers.map((bestSeller) => (
          <div key={bestSeller.id} className='flex flex-col gap-2 absolute top-0 left-96'>
              <Image src={bestSeller.url} alt={bestSeller.name} width={200} height={200} />
              <h1 className='capitalize text-base'>{bestSeller.name}</h1>
              <div className='flex items-center gap-2'>
              <p className='text-sm'>Ksh {bestSeller.price}</p>
              <Link href='/shop' className=' underline'> Shop &rarr;</Link>
              </div> 
          </div>
        ))}
        </div>
    </div>
  )
}

export default BestSellers