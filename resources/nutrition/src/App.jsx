import React from 'react'
import { useState } from 'react'
import './App.css'
import FoodData from '../../FoodData'
import Search from './Components/Search'
import Foodbox from './Components/Foodbox'

function App() {

  const [search,setSearch] = useState("")

  const filteredSearch = FoodData.filter((e)=>{
    return e.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <h3>Search</h3>
      <Search setSearch={setSearch}/>
      {
        filteredSearch.length<=0 ? (
          <p>No data found</p>
        ):(
          filteredSearch.map((e,index)=>{
            return <Foodbox key={index} ele={e} index={index}/>
          })
        )
      }
    </>
  )
}

export default App
