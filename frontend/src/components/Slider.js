"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'


const data = [
    {
        id: 1,
        image: "/assets/slide2n.jpg",
    },
    {
        id: 2,
        image: "/assets/slide3n.jpg",
    },
    {
        id: 2,
        image: "/assets/slide4n.jpg",
    }
]

function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0)

     useEffect(() => {
        const interval = setInterval(
            () => setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)
        ), 2000)
        return () => clearInterval(interval)
    },[]) 
  return (
    <div className='relative mt-5 w-full h-96 rounded-2xl'>
        <div>
            <Image src={data[currentSlide].image} alt='/' fill />
        </div>
        </div>
  )
}

export default Slider