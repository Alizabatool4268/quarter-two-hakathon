import React from 'react';
//import Image from 'next/image';
import Link from 'next/link';

function page() {
  return (
    <section>
        <div className='w-full h-[200px] bg-[#F6F5FF] mt-5'>
           <h1 className='text-[36px] font-bold'>Shopping Cart</h1>
           <span className='flex gap-3'>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Page</Link>
              <p className='text-[#FB2E86]'>Shopping Cart</p>
           </span>
        </div> 
    </section>
  )
}

export default page;