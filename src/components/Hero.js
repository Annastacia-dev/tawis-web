import Image from "next/image"
import { BsArrowRight,BsArrowLeft } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
      <div className="col-span-1 mt-10">
        <h1 className="text-4xl font-bold font-playfair leading-[50px] tracking-wide">Welcome to Tawi&apos;s Bloom<span></span>    Kisumu&apos;s first luxury florist!</h1>
        <p className="text-sm mt-6 leading-8">
          We believe that flowers and gifts have the power to brighten someone&apos;s day and bring joy to any occasion. That&apos;s why we&apos;re dedicated to providing the highest quality products and services to our customers.
          Our team of talented florists and customer service experts is passionate about creating stunning floral designs that exceed your expectations. From romantic bouquets to elegant centerpieces, we have something for every occasion.
          At Tawi&apos;s Bloom, we specialize in all things flowers, indoor/outdoor plants, balloons, gifts, birthdays, weddings, and funerals. Our personalized service and customized floral designs are sure to make your event unforgettable.
        </p>
        <button className="flex justify-center items-center gap-2 border border-black bg-transparent outline-none py-4 px-8 mt-10">
          <span className="text-md font-light uppercase">Shop Now</span>
          <BsArrowRight className='text-sm ml-2' />
        </button>
      </div>
      <div className="col-span-1 ml-28 relative">
        <Image src="/10.jpeg" alt="hero" width={340} height={400} />
        <div className="absolute bottom-[40%] right-16 flex flex-col gap-8 justify-center items-center">
          <BsArrowRight className='h-6 w-6 ml-2' />
          <BsArrowLeft className='h-6 w-6 ml-2' />
        </div>
      </div>
    </div>
  )
}

export default Hero