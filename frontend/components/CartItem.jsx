import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>
      <div className='shrink-0 aspect-square w-[80px] md:w-[120px]'>
        <img src="product-1.webp" />
      </div>

      <div className='w-full flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='text-lg md:text-2xl text-black/[0.8] font-semibold'>
            Jordan Retro 6 G
          </div>
          <div className='text-sm md:text-md font-medium text-black/[0.5] block md:hidden text-gray-400'>
            Men's Golf Shoes
          </div>
          <div className='text-sm md:text-md font-bold text-black/[0.5] mt-2'>
            MRP: $ 120.00
          </div>
        </div>
        <div className='text-sm md:text-md font-medium text-black/[0.5] hidden md:block text-gray-400'>
          Men's Golf Shoes
        </div>

        <div className='flex items-center justify-between mt-4'>
          <div className='flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md'>
            
            <div className='flex items-center gap-1'>
              <div className='font-semibold'>
                Size:
              </div>
              <select className='cursor-pointer'>
                <option value="1">UK 6</option>
                <option value="1">UK 6.5</option>
                <option value="1">UK 7</option>
                <option value="1">UK 7.5</option>
                <option value="1">UK 8</option>
                <option value="1">UK 8.5</option>
                <option value="1">UK 10</option>
                <option value="1">UK 11</option>
              </select>
            </div>

            <div className='flex items-center gap-1'>
              <div className='font-semibold'>
                Quantity:
              </div>
              <select className='cursor-pointer'>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
              </select>
            </div>
          </div>
          <RiDeleteBin6Line className='cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]'/>
        </div>
      </div>
    </div>
  )
}

export default CartItem