import Image from "next/image"

const About = () => {
  return (
    <div className='mt-20'>
      <h1 className='uppercase text-4xl font-playfair text-center'>About</h1>
      <hr className='h-0.5 my-8 bg-black border-0 rounded'/>
      <p className="text-sm mt-6 leading-8">
        Welcome to Tawi&apos; Bloom &#8208; Kisumu&apos; first luxury florist. Our motto is &quot;To the Romance of Life,&quot; and we&apos;re passionate about putting smiles on people&apos; faces with our beautiful flower arrangements and gifts.
        Our story began when our founder, Roda, noticed a niche in Kisumu&apos; floral industry. She received boring and not-so-fresh flowers from her boyfriend and decided to take matters into her own hands. Tawi&apos; Bloom was born from her love for flowers and the desire to provide customers with the highest quality products and services.
        At Tawi&apos; Bloom, we specialize in all things flowers, indoor/outdoor plants, balloons, gifts, birthdays, weddings, and funerals. Our talented team of florists and customer service experts is dedicated to creating stunning floral designs that exceed your expectations. Whether you need a romantic bouquet for your significant other, a beautiful arrangement for your wedding day, or a thoughtful sympathy arrangement, we have you covered.
        We&apos;re proud to offer personalized service and customized floral designs to match your vision and style. Our team takes the time to understand your needs and preferences to create unique and memorable floral arrangements that truly reflect your personality and the occasion.
        What sets us apart? Our commitment to excellence in all aspects of our business. We&apos;ve received recognition and awards for our outstanding floral designs and exceptional customer service. We&apos;re always looking for ways to innovate and improve our services, so you can trust that you&apos;re getting the best of the best when you choose Tawi&apos;s Bloom.
        Thank you for considering Tawi&apos; Bloom for your floral needs. We look forward to creating something beautiful for you!
      </p>
      {/* three grids of images */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
          <div className='col-span-1'>
            <Image src='/3.jpeg' alt='about1' width={320} height={320}
              className="h-[400px] w-[250px] mt-4 sm:mt-0 ml-4 sm:ml-0 sm:h-[350px] sm:w-[350px] object-cover"
            />
          </div>
          <div className='col-span-1'>
            <Image src='/5.png' alt='about1' width={320} height={320}
              className="h-[400px] w-[250px] mt-4 sm:mt-0 ml-4 sm:ml-0 sm:h-[350px] sm:w-[350px] object-cover"
            />
          </div>
          <div className='col-span-1'>
            <Image src='/6.jpeg' alt='about1' width={320} height={320}
              className="h-[400px] w-[250px] mt-4 sm:mt-0 ml-4 sm:ml-0 sm:h-[350px] sm:w-[350px] object-cover"
            />
          </div>
        </div>
    </div>
    
  )
}

export default About