import React from 'react';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { TbBooks } from 'react-icons/tb';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineToys } from 'react-icons/md';
import { MdOutlineSportsBasketball } from 'react-icons/md';
import { FiWatch } from 'react-icons/fi';
import { CgGames } from 'react-icons/cg';
import { GiPencilBrush } from 'react-icons/gi';
import { FiDisc } from 'react-icons/fi';
import { MdOutlineChair } from 'react-icons/md';

function CategorySection() {
  return (
    <div className="">
      <div className="flex justify-between mt-5">
        <p className="text-lg font-semibold">Our Top Categories</p>
        <p className="text-xs font-medium">see all</p>
      </div>
      <div className=" w-screen overflow-x-scroll h-25 flex flex-row gap-3 justify-between md:gap-2">
        <div className=''>
          <div className="bg-slate-200 w-20 h-20 mt-2  rounded-full relative">
            <HiOutlineDevicePhoneMobile
              size={40}
              className="absolute right-5 bottom-5"
            />
             
          </div>
          <p className="m-1">Electronics</p>
        </div>
        <div>
          <div className="bg-slate-200 w-20 h-20 m-2 rounded-full relative">
            <TbBooks size={40} className="absolute right-5 bottom-5" />
          </div>
          <p className="m-1">Books</p>
        </div>
        <div>
          <div className="bg-slate-200 w-20 h-20 m-2 rounded-full relative">
            <IoDiamond size={40} className="absolute right-5 bottom-5" />
          </div>
          <p className="m-1">Jewelries</p>
        </div>
        <div>
          <div className="bg-slate-200 w-20 h-20 m-2 rounded-full relative">
            <MdOutlineToys size={40} className="absolute right-5 bottom-5" />
          </div>
          <p className="m-1">Toys</p>
        </div>
        <div>
          <div className="bg-slate-200 w-20 h-20 m-2 rounded-full relative">
            <MdOutlineSportsBasketball
              size={40}
              className="absolute right-5 bottom-5"
            />
          </div>
          <p className="m-1">Sports</p>
        </div>
        <div>
          <div className="bg-slate-200 w-20 h-20 m-2 rounded-full relative">
            <FiWatch size={40} className="absolute right-5 bottom-5" />
          </div>
          <p className="m-1">Watches</p>
        </div>
        <div>
          <div className="bg-slate-200 w-20 h-20 m-2 rounded-full relative">
            <CgGames size={40} className="absolute right-5 bottom-5" />
          </div>
          <p className="m-1">Games</p>
        </div>
        <div>
          <div className="bg-slate-200 w-20 h-20 m-2 rounded-full relative">
            <GiPencilBrush size={40} className="absolute right-5 bottom-5" />
          </div>
          <p className="m-1">Fine art</p>
        </div>
        <div>
          <div className="bg-slate-200 w-20 h-20 m-2 rounded-full relative">
            <FiDisc size={40} className="absolute right-5 bottom-5" />
          </div>
          <p className="m-1">Software</p>
        </div>
        <div>
          <div className="bg-slate-200 w-20 h-20 m-2 rounded-full relative">
            <MdOutlineChair size={40} className="absolute right-5 bottom-5" />
          </div>
          <p className="m-1">Furniture</p>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
