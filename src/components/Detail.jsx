import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {BsYoutube} from 'react-icons/bs'
const Detail = () => {
    const {id}=useParams()
    const [meals,setMeals]=useState({})
    useEffect(()=>{
        fetchMeal()
    },[])

    const fetchMeal=async()=>{
        const api=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const {meals}=await api.json()
        setMeals(meals[0])
        console.log(meals[0]);
    }

  return (
    <div className='flex justify-center  items-center  w-[90%] mx-auto gap-3'>
      <img src={meals.strMealThumb} alt="" className='rounded object-cover h-[420px] m-1'/>
      <div className='h-96'>
         <h1 className='text-gray-500 text-2xl tracking-wide font-semibold mb-3'>{meals.strMeal}</h1> 
         <h1 className='text-gray-500 text-lg tracking-wide font-semibold mb-3'>{meals.strArea}</h1>   
         <h1 className='text-gray-500 text-base tracking-wide font-semibold'>{meals.strCategory}</h1>  
         <p className='leading-8 tracking-wide text-sm' >{meals.strInstructions}</p>
         <a href={meals.strYoutube} >
            <BsYoutube className='text-4xl text-red-600'/>
         </a>   

      </div>
    </div>
  )
}

export default Detail
