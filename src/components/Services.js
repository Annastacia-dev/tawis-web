import Image from "next/image"

const Services = () => {
  return (
    <div className='mt-20'>
      <h1 className='uppercase text-4xl font-playfair text-center'>Services</h1>
      <hr className='h-0.5 my-8 bg-black border-0 rounded' />
      <p className="text-sm mt-6 leading-8">
      At Tawi&apos;s Bloom, we offer a wide range of floral products and services to meet your every need. From romantic bouquets to elegant centerpieces, we have something for every occasion. Our team of talented florists and customer service experts is dedicated to providing the highest quality products and services to our customers.
      </p>
      {/* 3 grids of cards */}
      <div className='flex flex-col sm:flex-row gap-8 mt-10 w-full'>
        <div className=''>
          <div className='flex flex-col gap-4  border gray-500 p-4 rounded-md'>
            <div className='flex  flex-col justify-center items-center'>
              <Image src='/flower.png' alt='flower' width={200} height={200} className='object-cover' />
                <p className='text-2xl font-playfair font-italic'>Flower Arrangements.</p>
                <p className='text-sm text-left mt-6'>
                Our talented florists can create beautiful and unique flower arrangements to suit any occasion. From romantic bouquets to elegant centerpieces, we use only the freshest and highest quality flowers to create stunning designs that exceed your expectations.
              </p>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='flex flex-col gap-4  border gray-500 p-4 rounded-md'>
            <div className='flex  flex-col justify-center items-center'>
              <Image src='/wedding.png' alt='flower' width={200} height={200} className='object-cover' />
                <p className='text-2xl font-playfair font-italic'>Wedding Services.</p>
                <p className='text-sm text-left mt-6'>
                We know that your wedding day is one of the most important days of your life, and we&apos;re here to help make it unforgettable. From bridal bouquets to ceremony decor, our team can create customized floral designs that match your vision and style. We offer personalized consultations to understand your needs and preferences to ensure that every detail is perfect on your special day.
              </p>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='flex flex-col gap-4  border gray-500 p-4 rounded-md'>
            <div className='flex  flex-col justify-center items-center'>
              <Image src='/flower.png' alt='flower' width={200} height={200} className='object-cover' />
                <p className='text-2xl font-playfair font-italic'>Funeral Services.</p>
                <p className='text-sm text-left mt-6'>
                We understand how difficult it can be to say goodbye to a loved one. Our team can provide compassionate and personalized funeral services, including sympathy arrangements and casket sprays. We offer a range of designs to suit different tastes and budgets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
