"use client";

import Image from 'next/image';
import logo from '../../public/assets/logohere2.png';
import { MdOutlinePerson } from 'react-icons/md';
import { MdOutlineMail } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { FiSearch } from "react-icons/fi";
import { useSelector } from 'react-redux';
import Link from 'next/link';

function Header() {
  const name = useSelector(state => state.user.name)
  const productCart = useSelector((state) => state.cart);

  const totalSum = productCart.cartItems.reduce((acc, item) => acc + item.price, 0) + 300;


  return (
  <div>
    <div className="flex flex-col">
      <div className="flex w-full h-10 justify-between border-b-2 md:justify-between sm:justify-between">
        <div className="p-1">
          <Image src={logo} alt="" width={100} height={100} />
        </div>
        <div className="flex flex-row p-1">
          <input className="bg-white w-60 h-7 rounded-l-lg border-2 outline-none border-r-0" />
          <input className="bg-white w-20 h-7 border-2 border-l-0 outline-none" />
          <div className='flex justify-center items-center'>
          <input className="bg-black relative w-10 h-7 rounded-r-lg" />
          <FiSearch className='absolute text-white' size={20}/>
          </div>
        </div>
     
          <div className="flex items-end gap-2 sm:items-end justify-between">
            <MdOutlinePerson size={20}/>
            <div className="flex flex-col">
              <Link href={'/Login'} className="text-xs font-normal">sign in</Link>
              <p className="text-xs font-semibold">{name}</p>
            </div>
            <MdOutlineMail size={20}/>
            <AiOutlineHeart size={20}/>
            <Link href={'/cartPage'} className="flex relative items-end">
            <div className="flex left-3 bottom-2 justify-center items-center w-4 h-4 absolute rounded-full text-white text-xs bg-red-600">
                {productCart.cartItems?.length}
              </div>
              <AiOutlineShoppingCart size={20} />
            </Link>
              <div>
                <p className="text-xs font-extralight">Total</p>
                <p className="text-xs font-semibold">N{totalSum}</p>
              </div>
              <Link href={'/addProduct'} className='text-xs text-blue-500 font-medium'>Add Product</Link>
            </div>
          </div>
       
      </div>
      <div className="flex border-b-2 justify-between w-full h-10 sm:justify-between">
        <div className="flex p-2 gap-2">
          <BiSolidCategoryAlt size={25} />
          <p className="text-lg font-medium">CATEGORIES</p>
        </div>
        <div className='flex m-2 gap-5 text-xs font-medium sm:gap-2'>
          <p>Home</p>
          <p>Today's Deals</p>
          <p>Customer Services</p>
          <p>Trending Products</p>
          <p>Blog</p>
          <p>Special Offers</p>
        </div>
      </div>
    </div>
  
  );
}

export default Header;
