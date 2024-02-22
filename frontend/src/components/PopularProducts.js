"use client";


import React, { useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdOutlineStarBorder } from 'react-icons/md';
import { IoAddCircle } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import Image from 'next/image';
//import applewatch from '../../public/assets/applewatch.png';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '@/Redux/productSlice';
import { useRouter } from 'next/navigation';


 
 const PopularProducts =  () => {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const {data, pending} = useSelector((state) => state.product)

  const router = useRouter()

console.log(data)


  const dispatch = useDispatch()


   useEffect(() => {
     dispatch(getData())
  },[])
  
 
  return (
    <div>
      <div className="flex mb-5 mt-5 justify-between">
        <p className="text-xl font-bold">Popular Products 2023</p>
        <div className="flex gap-2">
          <div className=" bg-slate-300  w-5 h-5 relative  rounded-full">
            <FaChevronLeft className="absolute ml-1 mt-1 " size={10} />
          </div>
          <div className=" bg-slate-300 w-5 h-5  rounded-full">
            <FaChevronRight className="absolute ml-1 mt-1" size={10} />
          </div>
        </div>
      </div>
      {
        pending ? (<div> Loading ...</div>) : (

          <div className="flex w-screen overflow-x-scroll justify-between gap-5">
          {data.map((item) => (
         <div key={item._id}>
           <button type='button' onClick={()=>router.push(`/prodPage/${item._id}`)}>
             <div
             
               className="bg-slate-200 relative mb-2 rounded-md w-60 h-80"
             >
               <Image className=" absolute"   src={`${item.image}`} alt="" objectFit='cover' fill />
               <div className="absolute  w-7 h-7 bg-white ml-2 mt-2 rounded-full">
                 <FaRegHeart className="ml-1 mt-2" />
               </div>
             </div>
           </button>

           <div>
             <p className="text-xs font-bold">{item.name}</p>
             <p className="text-xs">{item.desc}</p>
             <div className="flex w-60 justify-between">
               <div className="">
                 <div className="flex gap-2">
                   <MdOutlineStarBorder />
                   <p className="text-xs">4.7</p>
                   <div className=" w-15 h-5 bg-slate-200 rounded-md">
                     <p className="text-xs font-bold">7,428 Sold</p>
                   </div>
                 </div>
                 <div className="flex gap-2">
                   <p className="text-sm">{item.price}</p>
                   <p className="text-sm font-bold">${item.price}</p>
                 </div>
               </div>

               <IoAddCircle size={40} />
             </div>
           </div>
         </div>
       ))}  
      
         {/* <div>
           <Link href={'/productpage'}>
             <div
               key={id}
               className="bg-slate-200 relative mb-2 rounded-md w-60 h-80"
             >
               <Image className=" absolute"  src={`${applewatch}`} alt=""  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true}/>
               <div className="absolute  w-7 h-7 bg-white ml-2 mt-2 rounded-full">
                 <FaRegHeart className="ml-1 mt-2" />
               </div>
             </div>
           </Link>

           <div>
             <p className="text-xs font-bold">{name}</p>
             <p className="text-xs">{desc}</p>
             <div className="flex w-60 justify-between">
               <div className="">
                 <div className="flex gap-2">
                   <MdOutlineStarBorder />
                   <p className="text-xs">4.7</p>
                   <div className=" w-15 h-5 bg-slate-200 rounded-md">
                     <p className="text-xs font-bold">7,428 Sold</p>
                   </div>
                 </div>
                 <div className="flex gap-2">
                   <p className="text-sm">{price}</p>
                   <p className="text-sm font-bold">N{price}</p>
                 </div>
               </div>

               <IoAddCircle size={40} />
             </div>
           </div>
         </div> */}
       

       {/*         <div>
         <div className="bg-slate-200 relative mb-2 rounded-md w-60 h-80">
           <Image className="absolute mt-10" src={applewatch} alt="" />
           <div className="absolute  w-7 h-7 bg-white ml-2 mt-2 rounded-full">
             <FaRegHeart className="ml-1 mt-2" />
           </div>
         </div>

         <div>
           <p className="text-xs font-bold">Product name Here</p>
           <p className="text-xs">Brand name</p>
           <div className="flex w-60 justify-between">
             <div className="">
               <div className="flex gap-2">
                 <MdOutlineStarBorder />
                 <p className="text-xs">4.7</p>
                 <div className=" w-15 h-5 bg-slate-200 rounded-md">
                   <p className="text-xs font-bold">7,428 Sold</p>
                 </div>
               </div>
               <div className="flex gap-2">
                 <p className="text-sm">N24.56</p>
                 <p className="text-sm font-bold">N24.56</p>
               </div>
             </div>

             <IoAddCircle size={40} />
           </div>
         </div>
       </div>

       <div>
         <div className="bg-slate-200 relative mb-2 rounded-md w-60 h-80">
           <Image className="absolute mt-10" src={applewatch} alt="" />
           <div className="absolute  w-7 h-7 bg-white ml-2 mt-2 rounded-full">
             <FaRegHeart className="ml-1 mt-2" />
           </div>
         </div>

         <div>
           <p className="text-xs font-bold">Product name Here</p>
           <p className="text-xs">Brand name</p>
           <div className="flex w-60 justify-between">
             <div className="">
               <div className="flex gap-2">
                 <MdOutlineStarBorder />
                 <p className="text-xs">4.7</p>
                 <div className=" w-15 h-5 bg-slate-200 rounded-md">
                   <p className="text-xs font-bold">7,428 Sold</p>
                 </div>
               </div>
               <div className="flex gap-2">
                 <p className="text-sm">N24.56</p>
                 <p className="text-sm font-bold">N24.56</p>
               </div>
             </div>

             <IoAddCircle size={40} />
           </div>
         </div>
       </div>

       <div>
         <div className="bg-slate-200 relative mb-2 rounded-md w-60 h-80">
           <Image className="absolute mt-10" src={applewatch} alt="" />
           <div className="absolute  w-7 h-7 bg-white ml-2 mt-2 rounded-full">
             <FaRegHeart className="ml-1 mt-2" />
           </div>
         </div>

         <div>
           <p className="text-xs font-bold">Product name Here</p>
           <p className="text-xs">Brand name</p>
           <div className="flex w-60 justify-between">
             <div className="">
               <div className="flex gap-2">
                 <MdOutlineStarBorder />
                 <p className="text-xs">4.7</p>
                 <div className=" w-15 h-5 bg-slate-200 rounded-md">
                   <p className="text-xs font-bold">7,428 Sold</p>
                 </div>
               </div>
               <div className="flex gap-2">
                 <p className="text-sm">N24.56</p>
                 <p className="text-sm font-bold">N24.56</p>
               </div>
             </div>

             <IoAddCircle size={40} />
           </div>
         </div>
       </div> */}
     </div>
        )
      }
   
    </div>
  );
};

export default PopularProducts;
