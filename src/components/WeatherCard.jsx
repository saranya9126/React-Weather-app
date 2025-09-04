import React from 'react'

const WeatherCard = ({ Weather }) => {
    return (
        <div className='mt-6'>
            <h2 className='text-2xl font-semibold text-center'>
                {Weather.name},{Weather.sys.country}
            </h2>
            <div className='flex justify-center items-center mt-4'>
                <img className='w-16 h-16' src={`http://openweathermap.org/img/wn/${Weather.weather[0].icon}@2x.png`} alt={Weather.weather[0].description} />

                <p>{Math.round(Weather.main.temp)}°C
                </p> </div>
            <p className='text-center text-gray-400 capitalize'>
                {Weather.weather[0].description}
            </p>
            <div className='grid grid-cols-2 gap-4 mt-6 mb-5'>
                <div className='text-center'>
                    <p className='text-gray-400'>
                        Humidity
                    </p>
                    <p className='font-bold'>{Weather.main.humidity}%</p>
                </div>
                <div className='text-center'>
                    <p className='text-gray-400' >Wind </p>
                    <p className='font-bold'>{Weather.wind.speed}m/s</p>
                </div>
                <div className='text-center'>
                    <p className='text-gray-400'>Pressure</p>
                    <p className='font-bold'>{Weather.main.pressure}m/s</p>
                </div>
                <div className='text-center'>
                    <p className='text-gray-400'>Feels Like</p>
                    <p className='font-bold'>{Math.round(Weather.main.feels_like)}°C</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard