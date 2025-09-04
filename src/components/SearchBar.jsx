import React, { useState } from 'react'

const SearchBar = ({fetchWeather}) => {
    const[city,setCity]=useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (city.trim()) {
            fetchWeather(city);
            setCity("");
       };

    };
  return (
    <>
    <form className='flex m-6'onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter city name' 
        value={city}
        onChange={(e)=> setCity(e.target.value)}
        className='flex-1 border rounded-l-lg p-2 border-gray-300 outline-none border-r-0 '/>
        <button type='submit' className='border rounded-r-lg p-2 border-gray-300 outline-none border-l-0
         bg-blue-700 cursor-pointer hover:bg-blue-900'>Search</button>
      
    </form>
  
    </>
  )
}

export default SearchBar