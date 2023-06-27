import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Mealcart from './Mealcart'
const Meal = () => {
    const[meals,setMeals]=useState([])
  useEffect(()=>{
      fetchdata()
  },[])

  const fetchdata=async()=>{
    const api=await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    const {meals}=await api.json()
    setMeals(meals)
    console.log(meals);
  }
  return (
    <div className='flex gap-6 flex-wrap justify-center'>
      {meals.map(meal=>{
        return(<Mealcart key={meal.idMeal} name={meal.strMeal} image={meal.strMealThumb} id={meal.idMeal} />)
        
      })}
    </div>
  )
}

export default Meal
