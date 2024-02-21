'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import latoya from '../../../public/assets/latoya.jpg';
//import applewatch from '../../../public/assets/applewatch.png';
import { RiDeleteBin6Line } from 'react-icons/ri';
//import ProgressBar from '@/components/ProgressBar';
import axios from 'axios';
//import { productAdd } from '@/Redux/apiCalls';

import { useSelector } from 'react-redux';
import noimage from '../../../public/assets/no image.jpg';


function page() {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const [addProduct, setAddProduct] = useState({
    name: '',
    desc: '',
    price: '',
    image: null,
    category: '',
    amount: 0
  });

  const user = useSelector(state => state.user)

  const [progressBar, setProgressBar] = useState(0);

  const [uploadFile, setUploadFile] = useState(null);

  console.log(uploadFile)


  const [preview, setPreview] = useState('');


  const handleChange = (e) => {
    e.preventDefault();
    setAddProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   //productAdd({name,category,price,desc}, dispatch)
  };


  const handleFile = (e) => {
    const file = e.target.files[0];

 
      setUploadFile(file);
    setPreview(URL.createObjectURL(file));  
  

    //transformFile(file)
  };



   /*   const transformFile = (file) => {
     const reader = new FileReader()

     if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setUploadFile(reader.result)
      }
     }else{
      setUploadFile("")
     }
  }   */
 

  const handleClick = async (e) => {
    e.preventDefault();
   
    const formData = new FormData();

    formData.append('name', addProduct.name);
    formData.append('desc', addProduct.desc);
    formData.append('price', addProduct.price);
    formData.append('category', addProduct.category);
    formData.append('image', uploadFile);
    formData.append('amount', addProduct.amount);

/* 
      try {
  const response = await fetch("http://localhost:8800/addProduct", {
    method: 'POST',
    body: formData,
  })

  if(response.status === 200){
    console.log('worked')
  }
  
 } catch (error) {
  console.log(error)
 }  */


 try {

    const response = await axios
      .post(`${apiUrl}/addProduct`, formData, {
       // headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (event) => {
          setProgressBar(Math.round(100 * event.loaded) / event.total);
        },
      })
     /*   .then((res => console.log("worked")))
      .catch((err) => console.log(err)); 
 */
      if (response.status === 200) {
        console.log('Request successful');
        // Clear the form or reset necessary state
        setAddProduct({

          name: '',
          desc: '',
          price: '',
          category: '',
          amount: 0,
        });
        setUploadFile(null);
        setPreview('');
        setProgressBar(0);
      }
    } catch (error) {
      console.log('Error during request:', error);
      // Handle error or show an error message to the user
    }
 
      const data = Object.fromEntries(formData)
      console.log(data)
     
  };

  return (
    <div>
      <div className="flex gap-5 justify-end">
        <div className="w-10 h-10 flex items-center rounded-md bg-gray-300">
          <IoIosNotificationsOutline size={30} />
        </div>
        <div className="flex  gap-2 items-center rounded-md  w-40 h-10 bg-gray-300">
          <Image className="m-1" src={latoya} alt="" width={25} />
          <div className="flex flex-col">
            <p className="text-xs font-semibold">{user.name}</p>
            <p className="text-xs font-extralight">{user.email}</p>
          </div>
          <IoIosArrowDown size={10} />
        </div>
      </div>

      <div className="w-10/12 mt-5 ml-20 h-screen">
        <p className="">Add Product</p>
        <form className="flex flex-col gap-10 ml-20 md:flex-row">
          <div className="flex flex-col sm:w-10/12 h-[600px] mt-5 border-2 md:w-2/5 border-gray-200 rounded-lg">
            <p className="mt-5 ml-5 text-sm">Add Images</p>
            <div className="bg-gray-100 relative rounded-md border-dashed border-blue-300 border-2 ml-5 mt-5 w-11/12 h-60">
            
              <label>
                <input
                  onChange={handleFile}
                  hidden
                  name="image"
                  type="file"
                  id="input"
                  accept="image/jpg, image/png"
                />
                <p className="absolute text-xs ml-32 mt-40">
                  Drop your files or{' '}
                  <span
                    id="input"
                    className=" cursor-pointer underline text-blue-500"
                  >
                    Browse
                  </span>{' '}
                </p>
              </label>
            </div>

            <div className="sm:w-10/12 h-10 ml-5 mt-2 border-0 rounded-md">
              <div className="flex justify-between gap-1 items-center ">
                {uploadFile ? (
                  <Image src={preview} alt="" width={30} height={30} />
                ) : <Image src={noimage} alt="" width={30} height={30}/>}

                <div className="flex flex-col w-3/5">
                  <p className="text-sm">applewatch.png</p>
                  <div className=" w-full h-2 rounded-full bg-gray-200">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: `${progressBar}%` }}
                    ></div>
                  </div>
                  <p className="text-xs">272mb</p>
                </div>
                <RiDeleteBin6Line />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:w-10/12 h-[600px] mt-5 border-2  md:w-2/5 border-gray-200 rounded-lg">
            <div>
              <label className="mt-5 ml-5 text-sm">Product Name</label>
              <input
                name="name"
                type="text"
                value={addProduct.name}
                placeholder="Name"
                onChange={handleChange}
                className="w-4/5 ml-5 mt-2 h-10  border-2 border-gray-300 rounded-md"
              />
            </div>
            <div>
              <p className="mt-5 ml-5 text-sm">Category</p>
              <input
                name="category"
                type="text"
                value={addProduct.category}
                placeholder="Category"
                onChange={handleChange}
                className="w-4/5 ml-5 mt-2 h-10  border-2 border-gray-300 rounded-md"
              />
            </div>

            <div>
              <p className="mt-5 ml-5 text-sm">Price</p>
              <input
                name="price"
                type="number"
                value={addProduct.price}
                placeholder="$"
                onChange={handleChange}
                className="w-4/5 ml-5 mt-2 h-10  border-2 border-gray-300 rounded-md"
              />
            </div>
            <div>
              <p className="mt-5 ml-5">Description</p>
              <input
                name="desc"
                type="text"
                value={addProduct.desc}
                placeholder="Description"
                onChange={handleChange}
                className="w-4/5 ml-5 mt-2 h-10  border-2 border-gray-300 rounded-md"
              />
            </div>
            <div>
              <p className="mt-5 ml-5">Amount</p>
              <input
                name="amount"
                type="number"
                value={addProduct.amount}
                placeholder="Amount"
                //onChange={handleChange}
                className="w-4/5 ml-5 mt-2 h-10  border-2 border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-end mr-20 mt-10">
              <button
                type="submit"
                onClick={handleClick}
                className="w-20 h-10 text-xs rounded-md bg-blue-400"
              >
                Publish Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
