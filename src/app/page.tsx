import Image from "next/image";
import Link from "next/link";
import Herosection from "@/components/Herosection";
import { LuRectangleHorizontal } from "react-icons/lu";
import { TbRectangleFilled } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { GoDot } from "react-icons/go";
import { FaPenNib } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

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
    { id:14,image:"/Images/24-hours-support 1.png", heading:"24/7 Support"}
  ]
  const trendingProducts= [
    {id:15, image:"/Images/image 1171.png", heading:"Cantilever chair", originalPrices:"$42.00" , discountedPrices:"$26.00 "},
    {id:16, image:"/Images/image 1170.png", heading:"Cantilever chair", originalPrices:"$42.00" , discountedPrices:"$26.00 "},
    {id:17, image:"/Images/image 31.png", heading:"Cantilever chair", originalPrices:"$42.00" , discountedPrices:"$26.00 "},
    {id:18, image:"/Images/chair-design.png", heading:"Cantilever chair", originalPrices:"$42.00" , discountedPrices:"$26.00 "},
  ]
  const topCategories =[
    {id:19, image:"/Images/gray-chair.png",heading:"Mini LCW Chair", price:"$56.00"},
    {id:20, image:"/Images/image 1168.png",heading:"Mini LCW Chair", price:"$56.00"},
    {id:21, image:"/Images/image 1171.png",heading:"Mini LCW Chair", price:"$56.00"},
    {id:22, image:"/Images/gray-chair.png",heading:"Mini LCW Chair", price:"$56.00"}
  ]

  const latestBlog =[
    {id:23, image:"/Images/bedroom-1.png", heading:"Top esssential Trends in 2021"},
    {id:24, image:"/Images/bedroom-2.png", heading:"Top esssential Trends in 2021"},
    {id:25, image:"/Images/bedroom-3.png", heading:"Top esssential Trends in 2021"},
  ]
  return (
   <main>
     <Herosection />
     {/* featured prodcts */}
     <section className="mt-11">
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
       <div className="text-[#FB2E86] flex justify-center items-center gap-2 text-sm mt-4">
         <TbRectangleFilled />
         <LuRectangleHorizontal />
         <LuRectangleHorizontal />
         <LuRectangleHorizontal />
       </div>
     </section>
     {/* latest products */}
     <section className="flex justify-center items-center flex-col mt-11">
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
     <section className="flex justify-center items-center flex-col mt-11">
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
     <section className="mt-5 bg-[#F1F0FF] overflow-x-hidden">
        <div className="flex justify-center items-center gap-2 msm:flex-col ssm:flex-col xsm:flex-col sm:flex-col">
          <Image height={550} width={558} alt="featuresImages" src={"/Images/Group 153.png"} className="md:w-[400px] xsm:w-[280px]  "></Image>
          <div className="flex flex-col gap-3">
            <h1 className="text-[35px] text-[#151875] font-semibold md:text-[30px] msm:text-[29px] xsm:text-[24px]">Unique Features Of leatest & <br className="xsm:hidden"/>Trending Poducts</h1>
           <ul className="flex justify-center flex-col xsm:text-[10px] ssm:text-sm msm:text-sm ">
             <li className="flex"> <GoDotFill className="text-red-600"/>All frames constructed with hardwood solids and laminates</li>
             <li className="flex"> <GoDotFill className="text-blue-700"/>Reinforced with double wood dowels, glue, screw - nails corner <br /> blocks and machine nails</li>
             <li className="flex"> <GoDotFill className="text-cyan-500"/>  Arms, backs and seats are structurally reinforced</li>
           </ul>
           <span className="flex gap-1">
             <button className="text-white h-[45px] w-[157px] bg-[#FB2E86] xsm:text-sm ssm:text-sm xsm:w-[120px]">Add To Cart</button>
             <span className="xsm:text-sm">
             <p>B&B Italian Sofa </p>
             <p>$32.00</p>
             </span>
           </span>
           </div>
         </div>
     </section>
     {/* trending products */}
     <section className="mt-11">
      <h1  className="text-[42px] flex justify-center items-center font-bold text-[#151875] xsm:text-[28px]
       ssm:text-[28px] msm:text-[35px] ">Trending Products</h1>
       <div className="flex justify-around items-center xsm:flex-col ssm:flex-col msm:flex-col">
          {trendingProducts.map((products)=>(
            <div className="h-[350px] w-[270px] flex flex-col justify-around items-center shadow-md" key={products.id}>
              <div className="bg-[#F5F6F8]">
              <Image height={171} width={171} alt="trendingproducts" src={products.image}></Image>
              </div>
               <span >
                 <h6 className="text-[#151875]">{products.heading}</h6>
                  <span className="flex justify-between items-center text-sm">
                    <p className="text-[#151875]">{products.discountedPrices}</p>
                    <p className="text-[#1518754D] line-through">{products.originalPrices}</p>
                  </span>
               </span>
            </div>

          ))}
       </div>
       <div className="flex justify-center items-center mt-10 sm:flex-col msm:flex-col ssm:flex-col xsm:flex-col">
         <span className="h-[270px] w-[420px] bg-[#FFF6FB] ssm:w-[300px] xsm:w-[260px]  msm:w-[300px]">
          <div className="flex flex-col justify-start items-start mt-4">
           <h1 className="text-[#151875] font-semibold">23% off in all products</h1>
           <Link href={"/"} className="text-[#FB2E86] underline decoration-[#FB2E86]">Shop Now</Link>
          </div>
          <span className="flex justify-end items-end">
            <Image height={100} width={200} alt="info" src={"/Images/image 1162.png"} ></Image>
          </span>
         </span>

         <span className="h-[270px] w-[420px] bg-[#EEEFFB] ssm:w-[300px] xsm:w-[260px] msm:w-[300px]">
          <div className="flex flex-col justify-start items-start mt-4">
           <h1 className="text-[#151875] font-semibold">23% off in all products</h1>
           <Link href={"/"} className="text-[#FB2E86] underline decoration-[#FB2E86]">View Collection</Link>
          </div>
          <span className="flex justify-end items-end">
            <Image height={300} width={300} alt="info" src={"/Images/image 1161.png"} ></Image>
          </span>
         </span>

         <div className="flex flex-col gap-3 ">
           <span className="flex justify-center items-center">
           <Image height={71} width={64} alt="info" src={"/Images/image 30.png"} ></Image>
            <span className="text-[#151875] flex flex-col">
              <h5 >Executive Seat chair</h5>
              <p>$32.00</p>
            </span>
           </span>
           <span className="flex justify-center items-center">
           <Image height={71} width={64} alt="info" src={"/Images/image 19.png"} ></Image>
            <span className="text-[#151875] flex flex-col">
              <h5 >Executive Seat chair</h5>
              <p>$32.00</p>
            </span>
           </span>
           <span className="flex justify-center items-center">
           <Image height={71} width={64} alt="info" src={"/Images/image 28.png"} ></Image>
            <span className="text-[#151875] flex flex-col">
              <h5 >Executive Seat chair</h5>
              <p>$32.00</p>
            </span>
           </span>

         </div>
       </div>
     </section>
     {/* Discount */}
     <section className="mt-11">
       <h1  className="text-[42px] flex justify-center items-center font-bold text-[#151875] xsm:text-[28px]
       ssm:text-[28px] msm:text-[35px] ">Discount Item</h1>
       <div className="flex justify-center items-center gap-2 ">
         <p className='hover:text-[#FB2E86] cursor-pointer'>Wood Chair</p>
         <p className='hover:text-[#FB2E86] cursor-pointer'>Plastic Chair</p>
         <p className='hover:text-[#FB2E86] cursor-pointer'>Sofa Colletion</p>
       </div>
       <div className=" flex justify-around items-center gap-3 msm:flex-col  ssm:flex-col xsm:flex-col sm:flex-col">
         <span className="ml-2">
           <h2 className="text-[35px] text-[#151875] font-bold">20% Discount Of All Products</h2>
           <p className="text-[#FB2E86]">Eams Sofa Compact</p>
           <p className="text-[#B7BACB]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br />
            feugiat habitasse nec, bibendum condimentum.
           </p>
           <div className="flex items-center gap-3 text-[#B7BACB] ">
           <span>
            <p className="flex"> <TiTick className="text-black"/> Material expose like metals</p>
            <p className="flex"> <TiTick className="text-black"/>Clear lines and geomatric figures</p>
           </span>
           <span>
            <p className="flex"> <TiTick className="text-black"/>Simple neutral colours.</p>
            <p className="flex"> <TiTick className="text-black"/>Material expose like metals</p>
           </span>
           </div>
           <button className="h-[46px] bg-[#FB2E86] w-[200px] text-white text-sm">Shop Now</button>
         </span>
         <Image width={699} height={597} alt="productImage" src={"/Images/Group 154.png"}></Image>
       </div>
     </section>
     {/* top category */}
     <section  className=" flex justify-center items-center flex-col">
      <h1 className="text-[42px] flex justify-center items-center font-bold text-[#151875] xsm:text-[28px]
       ssm:text-[28px] msm:text-[35px] ">Top Categories</h1> 
       <div className="grid grid-cols-4 grid-rows-1 md:grid-cols-2 md:grid-rows-2 xsm:grid-cols-1 xsm:grid-rows-4 ssm:grid-cols-1 ssm:grid-rows-4 msm:grid-cols-1 msm:grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 ">
         {topCategories.map((products)=>(
          <div className="h-[350px] w-[270px] flex flex-col justify-around items-center" key={products.id}>
            <span className="bg-[#31208A0D] h-[230px] w-[230px] rounded-[50%] flex justify-center items-center">
               <Image height={178} width={178} alt="topcategories" src={products.image}></Image>
            </span>
            <span className="flex justify-center items-center flex-col text-[#151875]">
              <p>{products.heading}</p>
              <p>{products.price}</p>
            </span>
          </div>
         ))}
       </div>
       <div className="text-[#FB2E86] flex justify-center items-center">
        <GoDotFill />
        <GoDot/>
        <GoDot/>
       </div>
     </section>
     {/* latest update subscribe our newslater */}
     <section className="mt-11">
      <div className="w-full bg-[url('/images/Rectangle-102.png')] bg-center bg-cover h-[462px] flex justify-center items-center flex-col">
       <h1 className="text-[35px] text-center text-[#151875] font-semibold md:text-[30px] msm:text-[29px] xsm:text-[24px]">Get Leatest Update By Subscribe <br /> 0ur Newslater</h1>
       <button className="text-white bg-[#FB2E86] h-[49px] w-[173px] rounded-sm">Shop Now</button>
      </div>
     </section>
     {/* brand Images */}
     <section className="flex justify-center items-center w-full">
       <Image height={100} width={500} alt="brands" src={"/Images/image 1174.png"}></Image>
     </section>
     {/* latest blog */}
     <section className="mt-11 flex justify-around items-center flex-col">
      <h1 className="text-[42px] flex justify-center items-center font-bold text-[#151875] xsm:text-[28px]
       ssm:text-[28px] msm:text-[35px] ">Leatest Blog</h1>
      <div className="flex justify-around items-center xsm:flex-col ssm:flex-col msm:flex-col md:flex-col sm:flex-col" >
        {latestBlog.map((products)=>(
          <div className="h-[493px] w-[370px] flex justify-around items-center flex-col xsm:w-[280px]" key={products.id}>
             <Image height={370} width={370} alt="bedroom" src={products.image}></Image>
             <span className="flex justify-around items-center">
               <p className="flex">
                <FaPenNib className="text-[#FB2E86]"/>
                SaberAli
              </p> 
              <p className="flex">
                <FaRegCalendarAlt className="text-[#FFA454]"/>
                21 August,2020
              </p>
             </span>
              <h5 className="text-[#151875] font-semibold">{products.heading}</h5>
              <p className="text-[#72718F]">More off this less hello samlande lied much <br />
              over tightly circa horse taped mightly</p>
              <Link href={"/"} className="text-[#151875] underline decoration-[#151875]">Read More</Link>
          </div>

        ))}
      </div>
     </section>
   </main>
  );
} 
