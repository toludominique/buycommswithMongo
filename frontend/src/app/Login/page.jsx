"use client"

import { login } from '@/Redux/userSlice';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function page() {

  const[name, setName] = useState("")
  const[email, setemail] = useState("")

  const user = useSelector((state) => state.user)
  const router = useRouter()

  const dispatch = useDispatch()

const handleUpdate = (e) => {
  e.preventDefault()
  dispatch(login({name, email}))
  router.push('/')
}
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex justify-center items-center bg-purple-200 w-2/4 h-3/4">
        <div className="flex bg-white w-4/5 h-4/5">
          <div className="bg-red-500 w-1/2 h-full"></div>
          <div className="flex items-center justify-center w-1/2 h-full">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-2xl">Log In</h1>
              <p className=" text-gray-400 font-medium text-xs">
                Enter your Name and Email
              </p>
              <div className="flex flex-col gap-1">
                <label className="text-sm">Name</label>
                <input type='text' placeholder={user.name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="flex flex-col gap-1">
                <label className=" text-sm">Email</label>
                <input type='text' placeholder={user.email} onChange={(e) => setemail(e.target.value)}/>
              </div>
              <button onClick={handleUpdate} className='bg-blue-500 text-sm text-white w-full h-7'>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
