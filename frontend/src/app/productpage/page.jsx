 "use client"

//import React, { useEffect, useState } from 'react';
import logohere2 from '../../../public/assets/logohere2.png';
import Image from 'next/image';
import { MdOutlineMail, MdOutlinePerson } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import star from '../../../public/assets/star.png';
import { IoIosArrowDown } from 'react-icons/io';
import applewatch from '../../../public/assets/applewatch.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
/* import { useDispatch, useSelector } from 'react-redux';
import { getData } from '@/Redux/productSlice';
import { useParams } from 'next/navigation';
 */


  const data = [
  
    {
      "id": 25,
      "name": "samsung",
      "desc": "samsung phone",
      "price": 1000,
      "image": "image_1706655206967.png",
      "category": "phone",
      "amount": 0
    },
    {
      "id": 26,
      "name": "Airpod Max",
      "desc": "Airpod Max Headphoes for quality sound",
      "price": 500,
      "image": "image_1706656645273.png",
      "category": "Gadgets",
      "amount": 0
    },
    {
      "id": 27,
      "name": "Macbook pro",
      "desc": "Macbook Pro 15\" Laptop",
      "price": 2000,
      "image": "image_1706656725650.png",
      "category": "Laptop",
      "amount": 0
    },
    {
      "id": 28,
      "name": "Samsung Tv",
      "desc": "Flat Samsung TV",
      "price": 3000,
      "image": "image_1706656784544.png",
      "category": "Electronics",
      "amount": 0
    },
    {
      "id": 29,
      "name": "Harley Davidson MotorBike",
      "desc": "Harley Davidson Motorcycle",
      "price": 30000,
      "image": "image_1706657153912.png",
      "category": "Motorcycles",
      "amount": 0
    },
    {
      "id": 30,
      "name": "Apple",
      "desc": "iphone 13pro max",
      "price": 700,
      "image": "image_1706658424913.png",
      "category": "Iphone",
      "amount": 0
    }
  ]
  
  console.log(data)

  const dat = data.map(item => (
 item.id
  ))

  console.log(dat)

function page() {

 
  return (
    <div>
  {data.map(item => (
    <div key={item.id}>
      {item.id}
      /
      {item.price}
    </div>
  ))}
     {/*  <div className=" flex justify-between w-full items-center h-10 font-light bg-gray-300 text-xs">
        <div className="flex gap-2 ml-10">
          <p>FACEBOOK</p>
          <p>INSTAGRAM</p>
        </div>
        <div>FREE DELIVERY</div>
        <div className="mr-10">TRUSTED PAYMENTS</div>
      </div>
      <div className="flex justify-between">
        <div></div>
        <div className=" flex w-20 h-10 relative ml-40">
          <Image className="absolute" src={logohere2}  alt="" fill={true} objectFit='cover' />
        </div>
        <div className="flex justify-between h-10 gap-5 mr-5 items-end ">
          <div>
            <MdOutlinePerson size={20} />
            <p className="text-xs">Person</p>
          </div>
          <div>
            <MdOutlineMail size={20} />
            <p className="text-xs">Person</p>
          </div>
          <div>
            <AiOutlineShoppingCart size={20} />
            <p className="text-xs">Person</p>
          </div>
        </div>
      </div>
      <div className="flex  justify-between ml-10 mr-10 border-b">
        <div className="flex gap-2 text-sm font-medium">
          <p>PORTFOLIO</p>
          <p>PORTFOLIO</p>
          <p>PORTFOLIO</p>
          <p>PORTFOLIO</p>
        </div>
        <div className="">
          <input className="w-30 h-5 border-b-2 " placeholder="search" />
        </div>
      </div>
      <div className="flex gap-4 text-xs ml-10 items-end h-10">
        <p>PORTFOLIO</p>
        <p>PORTFOLIO</p>
        <p className="font-extralight">PORTFOLIO</p>
      </div>

      <div className="flex mt-5 ml-28 gap-5">
        <div className=''>
         
            <div className="bg-red-500 w-80 h-96">{logohere2}</div>
          
          
          <div className=" flex relative gap-2 w-80 h-32 bg-gray-100">
            <div className="absolute bg-gray-200 w-6 h-7 mt-14 border-black border-2 z-10">
              <FaChevronLeft className="mt-1" />
            </div>
            <div className="absolute bg-gray-200 w-6 h-7 mt-14 right-0 border-black border-2 z-10">
              <FaChevronRight className="mt-1 ml-1" />
            </div>
            <div className=" w-16 h-24 relative ml-3 mt-5">
              <Image className=" absolute" src={applewatch} alt="" fill />
            </div>

            <div className="bg-red-500  w-16 h-24 relative ml-3 mt-5">
              <Image className=" absolute" src={applewatch} alt="" fill />
            </div>

            <div className="bg-red-500  w-16 h-24 relative ml-3 mt-5">
              <Image className=" absolute" src={applewatch} alt="" fill />
            </div>

            <div className="  w-16 h-24 relative ml-3 mt-5">
              <Image className=" absolute" src={applewatch} alt="" fill />
            </div>
          </div>
        </div>

        <div className="ml-5">
          <p className="font-bold text-lg">The Black Stone</p>
          <p className="text-xs"> GEMINI</p>
          <div className=" flex mt-5 gap-40 w-96 border-b-2">
            <div className=" flex w-5 h-5 gap-1 ">
              <Image className="" src={star} alt="" />
              <Image className="" src={star} alt="" />
              <Image className="" src={star} alt="" />
              <Image className="" src={star} alt="" />
              <Image className="" src={star} alt="" />
            </div>
            <p> 1 rating </p>
          </div>
          <p className="mt-5">200 NAIRA</p>
          <div className="flex mt-5 gap-5 items-end">
            <p>Model: </p>
            <div className="flex  justify-end">
              <input className="w-40 h-5 rounded-md border-b-2 relative " />
              <IoIosArrowDown className="absolute " />
            </div>
            <div className="text-xs flex flex-col uppercase">
              <p className="text-green-600">in stock</p>
              <p> shipping within 2 business workdays</p>
            </div>
          </div>
          <div className="flex mt-5 ">
            <div className="w-7 h-7 bg-gray-200 text-lg pl-2">-</div>
            <div className="w-7 h-7 pl-2">1</div>
            <div className="w-7 h-7 bg-gray-200 text-lg pl-2">+</div>
            <button className="w-20 h-7 ml-5 p-1 text-white text-xs bg-blue-900">
              {' '}
              CART
            </button>
          </div>
          <div className="w-96 mt-5">
            <p className="whitespace-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis assumenda necessitatibus nesciunt, nulla recusandae
              delectus architecto quis quos ea ab molestias? Doloribus quam
              corporis nostrum ipsam accusantium ad sed consequuntur!
            </p>
          </div>
        </div>
      </div>

      <div className='w-full h-5 text-xs ml-10 mt-5 flex gap-10 '>
        <p>ADDITIONAL INFORMATION</p>
        <p className='font-smi font-semibold underline'>REVIEW 1</p>
      </div>

      <div className='w-full flex items-center justify-center gap-2 ml-10 mt-5 mr-10 h-7 bg-gray-200  '>
        <p>+</p>
        <p className='text-xs '>ADDITIONALS</p>
      </div>

      <div className='ml-10 mt-5 mb-5 bg-gray-200  flex w-full h-20 gap-20'>
        <div className='flex flex-col gap-2 ml-5 mt-5 text-xs w-10 h-10'>
          <p className='font-bold whitespace-nowrap'> John Doe</p>
          <p>21/3/2023</p>
          <div className=" flex w-2 h-2 gap-1 ">
          <Image className="" src={star} alt="" />
              <Image className="" src={star} alt="" />
              <Image className="" src={star} alt="" />
              <Image className="" src={star} alt="" />
              <Image className="" src={star} alt="" />
          </div>
        </div>

        <div className='text-xs whitespace-normal font-medium flex items-center'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime, voluptate incidunt repudiandae, doloribus magni in, earum ipsam autem impedit reiciendis provident ipsum animi. Eaque sequi libero dolorum non magni.</p>
        </div>
      </div> */}
      product page
    </div>
  );
}

export default page;
 