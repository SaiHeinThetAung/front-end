import React, { useState } from 'react'
import {GiKnifeFork} from'react-icons/gi'
import {FiSearch} from 'react-icons/fi'
import {Link, useNavigate} from 'react-router-dom'
const Nav = () => {
  const [search,setSearch]=useState('')
  const nav=useNavigate()
  function find(e){
    e.preventDefault()
    nav(`/search/${search}`)
    
  }
  return (
    <div className='flex justify-around align-middle items-center border mb-[50px]  shadow-lg rounded h-[70px]'>
      <Link to={'/'} >
        <p><GiKnifeFork className='text-5xl'/> </p>
      </Link>
     
      <div>
        
        <form onSubmit={find}>
        <input type="text" placeholder='search here' value={search} onChange={e=>setSearch(e.target.value)} className=' outline-none rounded-md text-black p-3 shadow-lg' />
        </form>
        
      </div>
    </div>
  )
}

export default Nav
