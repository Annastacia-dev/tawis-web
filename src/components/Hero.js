import { useState, useEffect } from 'react'
import Image from "next/image"
import images from '@/data/heroImages'
import { BsArrowRight,BsArrowLeft } from 'react-icons/bs'

const Hero = () => {

  const [current, setCurrent] = useState(0)
  const length = images.length

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [current, length])

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(images) || images.length <= 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-24">
      <div className="col-span-1">
        <h1 className="text-4xl font-bold font-playfair leading-[50px] tracking-wide">Welcome to Tawi&apos;s Bloom<span></span>    Kisumu&apos;s first luxury florist!</h1>
        <p className="text-sm mt-6 leading-8">
          We believe that flowers and gifts have the power to brighten someone&apos;s day and bring joy to any occasion. That&apos;s why we&apos;re dedicated to providing the highest quality products and services to our customers.
          Our team of talented florists and customer service experts is passionate about creating stunning floral designs that exceed your expectations. From romantic bouquets to elegant centerpieces, we have something for every occasion.
          At Tawi&apos;s Bloom, we specialize in all things flowers, indoor/outdoor plants, balloons, gifts, birthdays, weddings, and funerals. Our personalized service and customized floral designs are sure to make your event unforgettable.
        </p>
        <button className="flex justify-center items-center gap-2 border border-black bg-transparent outline-none py-4 px-8 mt-10 hover:bg-black hover:text-white hover:transition duration-300">
          <span className="text-md font-light uppercase">Shop Now</span>
          <BsArrowRight className='text-sm ml-2' />
        </button>
      </div>
      <div className="col-span-1 ml-0 sm:ml-28 sm:mt-0 mt-8 relative">
        {
          images.map((image, index) => {
            return (
              <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
                  <Image src={image.url} alt={image.alt} width={320} height={320}
                  className="h-[300px] w-[300px] sm:h-[450px] sm:w-[300px] object-cover"
                   />
                )}
              </div>
            )
          }
          )
        }
        <div className="absolute bottom-[40%] right-1 sm:right-16 flex flex-col gap-8 justify-center items-center">
          <BsArrowRight className='h-6 w-6 ml-2 cursor-pointer' onClick={nextSlide} />
          <BsArrowLeft className='h-6 w-6 ml-2 cursor-pointer' onClick={prevSlide} />
        </div>
      </div>
    </div>
  )
}

export default Hero