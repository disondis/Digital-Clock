import { useEffect, useState } from 'react'
import './App.css'
const App=()=>{
  const[currentTime,SetCurrntTime]=useState( new Date())

  useEffect(()=>{

    const timer=setInterval(()=>{
      SetCurrntTime(new Date())
    },1000)

    return ()=> clearInterval(timer)

  },[])

  const formatTimeWithLeadingZero=(num)=>{
    return num < 10 ? `0${num}` :num;
  }

  const formatHour=(hour)=>{
    return hour === 0 ? 12 : hour >12 ? hour - 12 : hour;
  }

  const formatDate=(date)=>{
    const options={ weekday:"long", year:"numeric", month:"long",day:"numeric"};
    return date.toLocaleDateString(undefined,options)
  }

  return(
    <>
    <div className='container'>
      
      <h1>Digital Clock</h1>
      <div className='time'>{formatTimeWithLeadingZero(formatHour(currentTime.getHours()))}:
        {formatTimeWithLeadingZero(currentTime.getMinutes())}:
        {formatTimeWithLeadingZero(currentTime.getSeconds())}

        {currentTime.getHours >=12 ? "PM": "AM"}

      </div>
      <div className='date'>{formatDate(currentTime)}</div>
      <div>
        <p>Designed By:<a href='https://www.linkedin.com/in/dison-t-20241a315/'>Dison dys</a></p>
      </div>
    </div>
    </>
  )
}
export default App