import React from 'react'

import Wrapper from '@/components/Wrapper'
import { IoMdHeartEmpty } from 'react-icons/io'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts'

const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>

        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>

          {/* LEFT COLUMN START */}
          <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
            <ProductDetailsCarousel />
          </div>
          {/* LEFT COLUMN END */}

          {/* RIGHT COLUMN START */}
          <div className='flex-[1] py-3'>

            {/* PRODUCT TITLE */}
            <div className='text-[34px] font-semibold mb-2'>
              Jordan Retro 6 G
            </div>

            {/* PRODUCT SUB-TITLE */}
            <div className='text-lg font-semibold mb-5'>
              Men&apos;s Golf Shoes
            </div>

            {/* PRODUCT PRICE */}
            <div className='text-lg font-semibold'>
              MRP: ₹ 19 695.00
            </div>
            <div className='font-medium text-black/[0.5]'>
              incl. of taxes
            </div>
            <div className='font-medium text-black/[0.5] mb-20'>
              {`(Also inlcudes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className='mb-10'>

              {/* HEADING START */}
              <div className='flex justify-between mb-2'>
                <div className='font-semibold'>
                  Select Size
                </div>

                <div className='font-medium  text-black/[0.5] cursor-pointer'>
                  Size Guide
                </div>
              </div>
              {/* HEADING END */}


              {/* SIZE START */}
              <div className='grid grid-cols-3 gap-2'>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK 6
                </div>

                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK 6.5
                </div>

                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK 7
                </div>

                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK 7.5
                </div>

                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK 8
                </div>

                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK 8.5
                </div>

                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK 9
                </div>

                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK 9.5
                </div>

                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK 10
                </div>

                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK 10.5
                </div>

                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                  UK 11
                </div>

                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                  UK 11.5
                </div>

                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                  UK 12
                </div>

              </div>
              {/* SIZE END */}

              {/* SHOW ERROR START */}
              <div className='text-red-600 mt-1'>
                Size selection is required
              </div>
              {/* SHOW ERROR END */}

            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3  hover:opacity-75'>
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WISHLIST BUTTON START */}
            <div className='flex justify-center items-center gap-2 text-black border border-black py-4 rounded-full text-lg font-medium w-full hover:opacity-75 cursor-pointer transition-transform active:scale-95 mb-10'>
              Wishlist
              <IoMdHeartEmpty size={20} />
            </div>
            {/* WISHLIST BUTTON END */}

            {/* PRODUCT DESCRIPTION START */}
            <div>
              <div className='text-lg font-bold mb-5'>
                Product Details
              </div>
              <div className='text-mb mb-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est adipisci rerum doloribus rem eum vero suscipit numquam aspernatur eveniet accusantium recusandae impedit natus ut et nemo, aperiam vitae magni possimus.
                Repudiandae, ea deleniti similique distinctio eius necessitatibus repellat ut modi dolor praesentium, commodi ipsam accusamus minus ullam harum quas vitae id ducimus corrupti. Odit culpa quidem tempore nam, commodi distinctio?
                Libero cumque cum impedit aliquam unde reiciendis distinctio itaque obcaecati perspiciatis non, commodi animi ducimus, corporis quo debitis laudantium soluta ex saepe sint id ad necessitatibus modi quidem! Fugit, exercitationem?
                Nisi veritatis possimus velit deleniti cupiditate molestias magni ratione rerum officiis quia maxime voluptate magnam pariatur ab eaque animi enim, eveniet quam fugiat suscipit porro sequi dolore excepturi non. Error.
              </div>
            </div>
            {/* PRODUCT DESCRIPTION END */}
          </div>
          {/* RIGHT COLUMN END */}
        </div>
        <RelatedProducts />
      </Wrapper>
    </div >
  )
}

export default ProductDetails