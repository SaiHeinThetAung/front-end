import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Content from './Pages/Content'
import Nav from './components/Nav'
import Meal from './components/Meal'
import Detail from './components/Detail'
import Search from './components/Search'

const App = () => {
  return (
    <>
        <Nav/>
       <Routes> 
        <Route path='/' element={<Meal />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/search/:name' element={<Search />}></Route>

      </Routes> 
    </>
  )
}

export default App
