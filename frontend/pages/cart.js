import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import CartItem from '@/components/CartItem'

const Cart = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        {/* HEADING START */}
        <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
          <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
            Shopping Cart
          </div>
        </div>
        {/* HEADING END */}

        {/* CART CONTENT START */}
        <div className='flex flex-col lg:flex-row gap-12 py-10'>
          {/* CART ITEMS START */}
          <div className='flex-[3]'>
            <div className='text-xl font-semibold'>
              Cart Items
            </div>
            <div>
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
          </div>
          {/* CART ITEMS END */}

          {/* CART SUMMARY START */}
          <div className='flex-[1]'>
            <div className='text-xl font-semibold'>
              Summary
            </div>

            <div className='p-5 my-5 bg-black/[0.05] rounded-xl'>
              <div className='flex justify-between'>
                <div className='uppercase text-md md:text-lg font-medium text-black'>Subtotal</div>
                <div className='text-md md:text-lg font-medium text-black'>$ 360.00</div>
              </div>
              <div className='text-sm md:text-md py-5 border-t mt-5'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima molestiae accusamus quod rerum ullam repellendus quasi cum laboriosam doloribus in consequuntur alias expedita maiores tenetur illo tempore voluptate, accusantium hic!
              </div>
            </div>

            <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
              Checkout
            </button>
          </div>
          {/* CART SUMMARY END */}
        </div>
        {/* CART CONTENT END */}


        {/* EMPTY CART SCREEN START */}
        {/* <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-12'>
          <Image src="/empty-cart.jpg"
            width={300}
            height={300}
            className='w-[300px] md:w-[400px]'>
          </Image>
          <span className='text-xl font-bold'>
            Your cart is empty
          </span>
          <span className='items-center mt-4 md:mt-6'>
            Looks like you haven't added anything to your cart.
          </span>
          <Link
            className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8'
            href="/">
            Continue Shopping
          </Link>

        </div> */}
        {/* EMPTY CART SCREEN END */}

      </Wrapper>
    </div>
  )
}

export default Cart