import React, { useEffect, useState } from 'react'
import Content from './Content'
import Mealcard from '../components/Mealcart'

const Home = () => {
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
    <div className='flex gap-8 flex-wrap justify-center'>
      {meals.map(meal=>{
        return (
          <Mealcard mealdata={meal} />
          )
})}
    </div>
  )
}

export default Home
