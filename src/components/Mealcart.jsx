import React from 'react'
import{BsSearchHeart} from 'react-icons/bs'
import './mealcart.css'
import { Link } from 'react-router-dom'
const Mealcart = ({name,image,id}) => {
  return (
    <div className=' relative parent'>
      <img className='image h-[250px] object-cover rounded-lg' src={image}  alt="" />
      <Link to={`/detail/${id}`}>
      <p className='icon bg-orange h-[50] w-[50] rounded-[100%] absolute top-[43%] left-[43%]'>
          <BsSearchHeart className='text-white text-5xl'/>
        </p>
      </Link>
    
    </div>
  )
}

export default Mealcart
