import Link from 'next/link';
import React from 'react';

function page() {
  return (
    <section>
        <div className='w-full h-[200px] bg-[#F6F5FF] mt-5'>
           <h1 className='text-[36px] font-bold'>Shop Grid Default</h1>
           <span className='flex gap-3'>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Page</Link>
              <p className='text-[#FB2E86]'>Shop Grid Default</p>
           </span>
        </div>
    </section>
  )
}

export default page;