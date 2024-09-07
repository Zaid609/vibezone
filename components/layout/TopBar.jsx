"use client"

import { SignOutButton, SignedIn } from '@clerk/nextjs'
import { Add, Logout, Search } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const TopBar = () => {
  const router = useRouter()
  const [search, setSearch] = useState('') // Bind the input value to this state

  return (
    <div className='flex justify-between items-center mt-6'>
      <div className='relative'>
        {/* Correct the value and placeholder */}
        <input 
          type='text' 
          className='search-bar' 
          placeholder='Search posts, people, ....' 
          value={search} // This should be the search state, not the Search icon
          onChange={(e) => setSearch(e.target.value)} // Update the search state on input change
        />
        <Search className='search-icon' onClick={()=> {}}/>
      </div>

      <button className='create-post-btn' onClick={() => router.push("/create-post") }>
        <Add/> <p>Create A Post</p>
      </button>
      <div className='flex gap-3'>
      <SignedIn>
          <SignOutButton>
            <div className="flex gap-4 items-center cursor-pointer md:hidden">
              <Logout sx={{ color: "white", fontSize: "32px" }} />
             
            </div>
          </SignOutButton>
        </SignedIn>
        <Link href="/">
      <Image src="/assets/phucmai.png" alt="Phuc Mai" width={50} height={50} className="rounded-full md:hidden"/>
      </Link>
      </div>

    </div>
  )
}

export default TopBar