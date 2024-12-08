import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


function Blog() {
  return (
    <section>
        <div className='w-full h-[200px] bg-[#F6F5FF] mt-5'>
           <h1 className='text-[36px] font-bold'>Blog Page</h1>
           <span className='flex gap-3'>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Page</Link>
              <p className='text-[#FB2E86]'>Blog Page</p>
           </span>
        </div>
    </section>
  )
}

export default Blog