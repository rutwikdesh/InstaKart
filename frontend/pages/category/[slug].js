import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { useRouter } from 'next/router'

const Category = () => {
  const router = useRouter();
  const { slug } = router.query
  return <div className='w-full md:py-20'>
    <Wrapper>
      <div className='text-center max-w-[800px] mx-auto mt-2 md:mt-4'>
        <div className='text-[28px] md:text-[34px] mb-10 font-semibold leading-tight'>
          Running Shoes
        </div>
      </div>

      {/* Product Grid Start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* Product Grid End */}
    </Wrapper>
  </div>
}

export default Category