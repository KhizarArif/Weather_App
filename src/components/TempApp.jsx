import React, { useEffect, useState } from 'react'
import "./style.css"

const TempApp = () => {
    const [data, setData] = useState(null)
    const [value, setValue] = useState("")

    useEffect(() => {

        const FetchAPI = async () => {      
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=b6b61474c7ed44addb65c1b5bbdb8a01`
            const response = await fetch(URL)
            const resJson = await response.json()
            setData(resJson);
        }

        FetchAPI()
    }, [value])

    console.log(data);
    return (
        <>
            <div className="box">
                <h1 className='heading' > Weather App </h1>
                <input type="search" className='inputFeild' value={value} onChange={(e) => setValue(e.target.value)} />


                {
                    !data?.main ?
                    <p> No Data Found </p>
                    : 
                    <>
                        <div className="info">
                            <h2 className="location">
                                <i className="fa-solid fa-street-view"></i>
                                {value}
                            </h2>

                            <h1> {data?.main?.temp}°Cel </h1>
                            <h3> Min: {data?.main?.temp_min}°Cel | Max: {data?.main?.temp_max}°Cel </h3>
                        </div>

                        <div className="wave"></div>    
                        <div className="wave two"></div>
                        <div className="wave three"></div>
                    </> 
                }

            </div>
        </>
    )
}

export default TempApp
