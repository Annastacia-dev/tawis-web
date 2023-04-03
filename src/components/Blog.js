import blogs from '../data/blogs.json'
import { truncate } from '@/utils/truncate'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className='mt-20' id="blog">
      <h1 className='uppercase text-3xl font-playfair text-center'>stories</h1>
      <hr className='h-0.5 my-8 bg-black border-0 rounded'/>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
        {blogs.map((blog) => (
          <div className='flex flex-col sm:mt-4' key={blog.id}>
            <Image src={blog.image} alt={blog.title} width={320} height={320} className='transition duration-500 ease-in-out transform hover:scale-105 h-96 w-96 object-cover' />
            <h1 className='font-playfair font-bold text-2xl mt-4'>{blog.title}</h1>
            <p className='text-gray-800 mt-2'>{truncate(blog.content, 100)}</p>
            <a className='text-gray-800 underline mt-2'>Read More &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog