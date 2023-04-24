import Link from 'next/link';
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <ul
      className='hidden md:flex items-center gap-8 font-medium text-black'
    >
      <h1>{console.log(categories)}</h1>
      {data.map((item) => {
        return (
          <React.Fragment key={item.key}>
            {!!item?.subMenu ? (
              <li
                className='flex items-center gap-2 relative cursor-pointer'
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />

                {showCatMenu && (
                  <ul
                    className='bg-white absolute top-6 left-0 min-w-[200px] px-1 py-1 text-black shadow-lg'
                  >
                    {categories?.map(({ attributes: c, id }) => {
                      return (
                        <Link
                          key={id}
                          href={`/category/${c.slug}`}
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li
                            className='h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md'
                          >
                            {c.name}
                            <span
                              className='opacity-50 text-sm'
                            >
                              {`${c.products.data.length}`}
                            </span>
                          </li>
                        </Link>
                      )
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li>
                <Link href={item?.url}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        )
      })}
    </ul>
  )
}

export default Menu