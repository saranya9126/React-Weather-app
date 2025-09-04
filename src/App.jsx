
import axios from "axios";
import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from "./components/WeatherCard";

function App() {
const[Weather,SetWeather]=useState(null);
const[loading,SetLoading]=useState(false);
const[error,SetError]=useState("")

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL =`https://api.openweathermap.org/data/2.5/weather`;

const fetchWeather = async (city) => {
  SetLoading(true);
  SetError('');
  try{
    const url =`${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
 const response = await axios.get(url);
 console.log(response.data);
 SetWeather(response.data);
  }
  catch(err){
    if(err.response && err.response.status === 404){
      SetError('City not found.Please try again.')
    } else
    {
      SetError("An error occurred.please try again later.")
    }
    SetWeather(null);
  }
    finally{
      SetLoading(false)
    
  }
}


  return (

    <div className='min-h-screen flex flex-col items-center justify-center
      relative bg-cover bg-center'
   style= {{backgroundImage:"url('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')"}}>
        
      <div className='bg-black/90 text-white rounded-lg shadow-lg 
      p-2 max-w-md w-full'> 
         <h1 className='text-xl font-bold text-center mt-4'>Weather App</h1>
     
      <SearchBar fetchWeather={fetchWeather}/>
      {loading &&<p className="text-center mt-4">Loading....</p>}
      {error&& <p className="text-red-500 text-center mt-4 mb-5">{error}</p>}
      {Weather && <WeatherCard Weather={Weather}/>}
 </div>
     
    </div>
    

  )
}

export default App
