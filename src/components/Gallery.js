import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import galleryImages from '../data/galleryImages'

const Gallery = () => {
    const [current, setCurrent] = useState(0)
    const length = galleryImages.length

    useEffect(() => {
      setCurrent(0)
      const interval = setInterval(() => {
        setCurrent(current => (current + 1) % length)
      }, 6000);
      return () => clearInterval(interval);
    }, [length])

    return (
      <div className='relative'>
       <div className='flex flex-col sm:gap-4 gap-2 sm:mt-24 mt-[2400px] sm:ml-0 ml-4'>
         <div className='grid grid-cols-2 sm:grid-cols-3 sm:gap-1 gap-2 sm:w-9/12'>
            <div className="col-span-1">
              <Image src={galleryImages[current].url} alt={galleryImages[current].alt} 
               width={320} height={320}/>
            </div>
            <div className="col-span-1">
              <Image src={galleryImages[(current + 1) % length].url} alt={galleryImages[(current + 1) % length].alt} width={320} height={320} />
            </div>
            <div className="col-span-1">
              <Image src={galleryImages[(current + 2) % length].url} alt={galleryImages[(current + 2) % length].alt} width={320} height={320} />
            </div>
         </div>
         <div className='grid grid-cols-2 sm:grid-cols-4 sm:gap-1 gap-2 sm:w-9/12'>
         <div className="col-span-1">
              <Image src={galleryImages[(current + 3) % length].url} alt={galleryImages[(current + 2) % length].alt} width={320} height={320} />
            </div>
            <div className="col-span-1">
              <Image src={galleryImages[(current + 4) % length].url} alt={galleryImages[(current + 1) % length].alt} width={320} height={320} className="sm:mt-0 -mt-36" />
            </div>
            <div className="col-span-1">
              <Image src={galleryImages[(current + 5) % length].url} alt={galleryImages[(current + 2) % length].alt} width={320} height={320} />
            </div>
            <div className="col-span-1">
              <Image src={galleryImages[(current + 6) % length].url} alt={galleryImages[(current + 2) % length].alt} width={320} height={320} className="sm:mt-0 -mt-36" />
            </div>
         </div>
       </div>
       <div className="border-l border-black absolute top-0 sm:right-48  sm:h-[700px] mx-4 sm:ml-80 hidden sm:block"></div>
       <h1 className='font-playfair absolute sm:top-96 -top-20 sm:right-16  capitalize text-3xl'>Gallery</h1>
       <hr className='absolute sm:hidden -top-20  w-20 h-0.5 my-8 bg-black border-0 rounded' />
      </div>
    )
}

export default Gallery

