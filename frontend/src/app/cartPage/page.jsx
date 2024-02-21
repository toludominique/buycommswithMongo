'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import applewatch from '../../../public/assets/applewatch.png';
import { useDispatch, useSelector } from 'react-redux';
import { add, calculateTotals, increase } from '@/Redux/cartSlice';
import Link from 'next/link';

function page() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const productCart = useSelector((state) => state.cart);
  const { items } = useSelector((state) => state.cart);
  //const { value } = useSelector((state) => state.cart)
  //console.log(productCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, []);

  const handleIncrease = (item) => {
    dispatch(add(item));
  };

  const totalSum = productCart.cartItems.reduce((acc, item) => acc + item.price, 0) + 300;

  return (
    <div>
      <div className='flex flex-col w-screen'>
        <div className="bg-white border-b-2 w-full h-20 flex justify-end">
          <div className="flex items-center justify-center gap-2 mr-5">
            <Link href={'/'}>categories</Link>
            <Link href={'/'}>popular</Link>
            <AiOutlineShoppingCart size={20} />
            <p>{productCart.cartItems.length}</p>
          </div>
        </div>
        <div className="flex flex-row w-screen">
          <div className="bg-gray-200 w-3/4 h-screen sm:w-3/4 md:w-3/4">
            <div className="w-11/12 h-3/4 mt-20 ml-20 flex flex-col gap-5">
              <h1 className="text-2xl font-extrabold">CART</h1>
              <div className=" flex flex-col gap-2 w-11/12 h-3/4 border-gray border-gray-300 border-t-2 border-b-2">
                {productCart.cartItems?.map((item) => (
                  <div
                    key={item._id}
                    className=" flex items-center p-2 justify-between w-full h-32"
                  >
                    <Image
                      src={item.image}
                      alt=""
                      width={100}
                      height={150}
                    />
                    <div className="flex flex-col">
                      <p className="font-bold text-xl">{item.name}</p>
                      <p className="text-base font-bold text-gray-400">
                        {item.category}
                      </p>
                    </div>
                    <p className="text-gray-500 text-lg font-bold">
                      {item.price}
                    </p>
                    <div className="flex flex-row ">
                      <button
                        onClick={() => dispatch(decrement())}
                        className="flex justify-center w-7 h-7 bg-white text-lg cursor-pointer"
                      >
                        -
                      </button>

                      <div className=" bg-white flex justify-center w-7 h-7 ">
                        {item.amount}
                      </div>
                      <button
                        onClick={() => handleIncrease(item)}
                        className=" flex justify-center w-7 h-7 bg-white text-lg  cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-bold text-xl">X</p>
                  </div>
                ))}
              </div>
              <p className="font-medium text-xl text-gray-400">
                CONTINUE SHOPPING
              </p>
            </div>
          </div>
          <div className="bg-gray-300 w-1/4 h-screen sm:w-1/4 md:w-1/4">
            <div className="w-4/5 h-4/5 ml-10 mt-20 flex flex-col gap-5">
              <h1 className="font-bold text-lg">Order Summary</h1>
              <div className="flex text-sm  justify-between">
                <p>{productCart.cartItems.length} items</p>
                <p>N{productCart.cartTotalAmount}</p>
              </div>
              <div className="flex text-sm  justify-between">
                <p>Delivery Fee</p>
                <p>$300.00</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold text-sm">Total Cost</p>
                <p className="font-bold text-lg">{totalSum}</p>
              </div>

              <div className="flex w-full h-10 justify-center">
                <button className="w-3/4 h-10 bg-black text-white text-xs">
                  proceed to checkout
                </button>
              </div>
              <p className="text-xs font-semibold text-gray-500 felx flex-nowrap">
                Shopping and Tax Calculated under Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
