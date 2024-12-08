import Image from "next/image";
import Herosection from "@/components/Herosection";
import { LuRectangleHorizontal } from "react-icons/lu";
import { TbRectangleFilled } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";

export default function Home() {
  const featuredProduct =[
    { id:1, Image:"/Images/image 1168.png", heading:"Cantilever chair", code:"Code - Y523201", price:"$42.00", separator:"/Images/Group 141.png"},
    { id:2, Image:"/Images/image 1.png", heading:"Cantilever chair", code:"Code - Y523201", price:"$42.00" , separator:"/Images/Group 141.png"},
    { id:3, Image:"/Images/image 1169.png", heading:"Cantilever chair", code:"Code - Y523201", price:"$42.00" , separator:"/Images/Group 141.png"},
    { id:4, Image:"/Images/image 3.png", heading:"Cantilever chair", code:"Code - Y523201", price:"$42.00" , separator:"/Images/Group 141.png"},
  ]
  const latestProducts=[
    {id:5, image:"/Images/image 1166.png", heading:"Comfort Handy Craft", dicountedprice:"$42.00", originalprice:"$65.00"},
    {id:6, image:"/Images/image 15.png", heading:"Comfort Handy Craft", dicountedprice:"$42.00", originalprice:"$65.00"},
    {id:7, image:"/Images/image 1168.png", heading:"Comfort Handy Craft", dicountedprice:"$42.00", originalprice:"$65.00"},
    {id:8, image:"/Images/image 23.png", heading:"Comfort Handy Craft", dicountedprice:"$42.00", originalprice:"$65.00"},
    {id:9, image:"/Images/chair-design.png", heading:"Comfort Handy Craft", dicountedprice:"$42.00", originalprice:"$65.00"},
    {id:10, image:"/Images/image 3.png", heading:"Comfort Handy Craft", dicountedprice:"$42.00", originalprice:"$65.00"}
  ]
  const shopexOffer =[
    { id:11,image:"/Images/free-delivery 1.png", heading:"24/7 Support"},
    { id:12,image:"/Images/cashback 1.png", heading:"24/7 Support"},
    { id:13,image:"/Images/Group.png", heading:"24/7 Support"},
    { id:14,image:"/Images/24-hours-support 1.png", heading:"24/7 Support"},
  ]
  return (
   <main>
     <Herosection />
     {/* featured prodcts */}
     <section>
       <h1 className="text-[42px] text-[#1A0B5B] font-bold flex justify-center items-center xsm:text-[32px] ssm:text-[34px]">Featured Products</h1>
       <div className="flex justify-around items-center xsm:flex-col ssm:flex-col msm:flex-col">
        {featuredProduct.map((products)=>(
          <div className="h-[261px] w-[270px] flex flex-col justify-around items-center shadow-md" key={products.id}>
             <Image height={130} width={150} alt="product" src={products.Image}></Image>
             <div className="flex justify-center items-center flex-col hover:bg-[#2F1AC4]">
               <h5 className="text-[#FB2E86]">{products.heading}</h5>
               <Image height={24} width={54} alt="seperator" src={products.separator}></Image>
               <p>{products.code}</p>
               <p>{products.price}</p>
             </div>
          </div>
        ))}
       </div>
       <div className="text-[#FB2E86] flex justify-center items-center gap-2 text-sm">
         <TbRectangleFilled />
         <LuRectangleHorizontal />
         <LuRectangleHorizontal />
         <LuRectangleHorizontal />
       </div>
     </section>
     {/* latest products */}
     <section className="flex justify-center items-center flex-col">
       <h1 className="text-[42px] text-[#1A0B5B] font-bold flex justify-center items-center xsm:text-[32px] ssm:text-[34px]">Leatest Products</h1>
       <div className="flex justify-center items-center gap-2 xsm:text-[12px]">
       <p  className='hover:text-[#FB2E86] hover:underline decoration-[#FB2E86]'>New Arrival</p>
       <p  className='hover:text-[#FB2E86] hover:underline decoration-[#FB2E86]'>Best Seller</p>
       <p  className='hover:text-[#FB2E86] hover:underline decoration-[#FB2E86]'>Featured</p>
       <p  className='hover:text-[#FB2E86] hover:underline decoration-[#FB2E86]'>Special Offer</p>
       </div>
       <div className="grid grid-rows-2 grid-cols-3 mt-3 sm:grid-cols-2 sm:grid-rows-3 msm:grid-cols-1 msm:grid-rows-4 ssm:grid-cols-1 ssm:grid-rows-4 xsm:grid-cols-1 xsm:grid-rows-4">
         {latestProducts.map((products)=>(
          <div className="h-[365px] w-[306px] msm:w-[260px] shadow-md flex justify-center items-center" key={products.id}>
            <div className="flex justify-center flex-col items-center ">
              <Image height={223} width={229} alt="products" src={products.image} className="bg-[#F7F7F7]"></Image>
              <span className="w-[229px] flex justify-between items-center msm:w-[200px]" >
                 <p className="text-[10px] text-[#2F1AC4]">{products.heading}</p>
                 <span className="text-[10px] flex justify-center items-center gap-1">
                 <p className="text-[#2F1AC4]">{products.dicountedprice}</p>
                 <p className="text-red-600 line-through">{products.originalprice}</p>
                 </span>
              </span>
            </div>
          </div>
         ))}
       </div>
     </section>
     {/* shopex offer */}
     <section className="flex justify-center items-center flex-col mt-5">
       <h1 className="text-[42px] flex justify-center items-center font-bold text-[#151875] xsm:text-[28px] ssm:text-[28px] msm:text-[35px] ">What Shopex Offer!</h1>
       <div className="grid grid-cols-4 grid-rows-1 xsm:grid-cols-1 xsm:grid-rows-4 md:grid-cols-2
        md:grid-rows-2 ssm:grid-cols-1 ssm:grid-rows-4 msm:grid-cols-1 msm:grid-rows-4 sm:grid-cols-2 
        sm:grid-rows-2 text-center">
        {shopexOffer.map((product)=>(
          <div className="h-[320px] w-[270px] flex justify-center items-center md:h-[280px] flex-col shadow-md" key={product.id}>
             <Image height={54} width={54} alt="services" src={product.image}></Image>
             <h3 className="text-[#151875] font-bold">{product.heading}</h3>
             <p className="text-[#1A0B5B4D] ">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
          </div>
        ))}
       </div>
     </section>
     {/* unique features */}
     <section className="mt-5 bg-[#F1F0FF]">
        <div className="flex justify-center items-center gap-2">
          <Image height={550} width={558} alt="featuresImages" src={"/Images/Group 153.png"} className="md:w-[400px] msm:hidden ssm:hidden xsm:hidden sm:hidden "></Image>
          <div className="flex flex-col gap-3">
            <h1 className="text-[35px] text-[#151875] font-semibold md:text-[30px] msm:text-[29px] xsm:text-[28px]">Unique Features Of leatest & <br />Trending Poducts</h1>
           <ul className="flex justify-center flex-col xsm:text-sm ssm:text-sm msm:text-sm">
             <li className="flex"> <GoDotFill className="text-red-600"/>All frames constructed with hardwood solids and laminates</li>
             <li className="flex"> <GoDotFill className="text-blue-700"/>Reinforced with double wood dowels, glue, screw - nails corner <br /> blocks and machine nails</li>
             <li className="flex"> <GoDotFill className="text-cyan-500"/>  Arms, backs and seats are structurally reinforced</li>
           </ul>
           <span className="flex gap-1">
             <button className="text-white h-[45px] w-[157px] bg-[#FB2E86] xsm:text-sm ssm:text-sm">Add To Cart</button>
             <span className="xsm:text-sm">
             <p>B&B Italian Sofa </p>
             <p>$32.00</p>
             </span>
           </span>
           </div>
         </div>
     </section>
     {/* trending products */}
     <section></section>
   </main>
  );
} 
