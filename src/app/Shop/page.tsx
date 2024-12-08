import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaWindows } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

function page() {
  const shop=[
    {id:1, image:"/Images/image 9.png", heading:"Vel elit euismod", originalPrices:"$42.00" , discountedPrices:"$26.00 "},
    {id:2, image:"/Images/image 1165.png", heading:"Vel elit euismod", originalPrices:"$42.00" , discountedPrices:"$26.00 "},
    {id:3, image:"/Images/image 1173.png", heading:"Vel elit euismod", originalPrices:"$42.00" , discountedPrices:"$26.00 "},
    {id:4, image:"/Images/black-bag.png", heading:"Vel elit euismod", originalPrices:"$42.00" , discountedPrices:"$26.00 "},
    {id:5, image:"/Images/watch-2.png", heading:"Vel elit euismod", originalPrices:"$42.00" , discountedPrices:"$26.00 "},
    {id:6, image:"/Images/smartwatch-2.png", heading:"Vel elit euismod", originalPrices:"$42.00" , discountedPrices:"$26.00 "},
    {id:7, image:"/Images/purepng 1.png", heading:"Vel elit euismod", originalPrices:"$42.00" , discountedPrices:"$26.00 "},
    {id:8, image:"/Images/image 1164.png", heading:"Vel elit euismod", originalPrices:"$42.00" , discountedPrices:"$26.00 "},
    {id:9, image:"/Images/smartwatch-1.png", heading:"Vel elit euismod", originalPrices:"$42.00" , discountedPrices:"$26.00 "},
    {id:10, image:"/Images/cam 2.png", heading:"Vel elit euismod", originalPrices:"$42.00" , discountedPrices:"$26.00 "},
    {id:11, image:"/Images/headphones-pink.png", heading:"Vel elit euismod", originalPrices:"$42.00" , discountedPrices:"$26.00 "},
    {id:12, image:"/Images/black-bag.png", heading:"Vel elit euismod", originalPrices:"$42.00" , discountedPrices:"$26.00 "},
  ]
  return (
    <section className='overflow-x-hidden'>
        <div className='w-full h-[200px] bg-[#F6F5FF] mt-5'>
           <h1 className='text-[36px] font-bold'>Shop Grid Default</h1>
           <span className='flex gap-3'>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Page</Link>
              <p className='text-[#FB2E86]'>Shop Grid Default</p>
           </span>
        </div>
        <div className='flex justify-around items-center xsm:flex-col ssm:flex-col'>
          <span>
          <h5 className='text-[#151875] font-bold'>Ecommerce Acceories & Fashion item </h5>
          <p className='text-[#8A8FB9]'>About 9,620 results (0.62 seconds)</p>
          </span>
          <span className='flex justify-center gap-1 items-center msm:flex-col ssm:flex-col xsm:flex-col sm:flex-col'>
             <span className='flex gap-1'>
              <p>Per Page:</p>
              <p className='border-[1px] border-solid border-black h-[25px] w-[35px] sm:w-[100px] ssm:w-[100px] xsm:w-[100px] msm:w-[100px]'></p>
             </span>

             <span className='flex gap-1'>
              <p>Sort By:</p>
              <select name="matchproduct" id="matchproduct" className='border-[1px] border-solid border-black rounded-sm'>
                <option value="Bestmatch">Best Match</option>
              </select>
             </span>

             <span className='flex gap-1'>
              <p className='flex gap-1 items-center'>View:<FaWindows/> <FaList /> </p>
              <p className='border-[1px] border-solid border-black h-[30px] w-[162px]'></p>
             </span>
          </span>
        </div>
        <div className='grid grid-cols-4 grid-rows-3 gap-2 md:grid-cols-2 md:grid-rows-5
         lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3 sm:grid-cols-2 sm:grid-rows-5 
         msm:grid-cols-1 msm:grid-rows-12 ssm:grid-cols-1 ssm:grid-rows-12 xsm:grid-cols-1 xsm:grid-rows-12'>
           {shop.map((products)=>(
             <div className='h-[270px] w-[370px] flex items-center justify-center flex-col' key={products.id}>
               <span className='w-[370px] bg-[#F6F5FF] flex justify-center items-center'>
               <Image height={169} width={169} alt="product" src={products.image}></Image>
               </span>
               <span className='flex justify-center flex-col items-center'>
                 <h6 className='text-[#151875]'>{products.heading}</h6>
                 <span className='flex gap-1'>
                   <GoDotFill className='text-[#DE9034]'/>
                   <GoDotFill className='text-[#EC42A2]'/>
                   <GoDotFill className='text-[#8568FF]'/>
                 </span>
                 <span className="flex justify- items-center text-sm gap-2">
                    <p className="text-[#151875]">{products.discountedPrices}</p>
                    <p className="text-[#FB2E86] line-through">{products.originalPrices}</p>
                  </span>
                </span>
             </div>
           ))}
        </div>
        <section className="flex justify-center items-center w-full">
          <Image height={100} width={500} alt="brands" src={"/Images/image 1174.png"}></Image>
        </section>
    </section>
  )
}

export default page;