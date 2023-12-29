"use client"
import React, { useState } from 'react'

const Notification = () => {
    const [ notfigationToggle, setNotfigationToggle ] = useState(false)
    const [ alertToggle, setAlertToggle ] = useState(false)
    
    const turnNotificaton = ()=>{
        setNotfigationToggle(!notfigationToggle)
    }

     const turnAlert = ()=>{
        setAlertToggle(!alertToggle)
    }
  return (
    <main className="main_dashboard">
      <div className='notification_container'>
        <h1>Notification</h1>
        <div className='enable_container'>
            <p>Enable Push Notification</p>
            <div className='toggle_container'>
                <div className='rect'></div>
                {notfigationToggle ? (<div className='circle2' onClick={()=>turnNotificaton()}></div>) : (<div className='circle1' onClick={()=> turnNotificaton()}></div>)}
            </div>
        </div>
      
       <div className='enable_container'>
            <p>Ticket Buy Alerts</p>
            <div className='toggle_container'>
                <div className='rect'></div>
                {alertToggle ? (<div className='circle2' onClick={()=>turnAlert()}></div>) : (<div className='circle1' onClick={()=> turnAlert()}></div>)}
            </div>
        </div>
      </div>
    </main>
  )
}

export default Notification
