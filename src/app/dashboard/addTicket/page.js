"use client"
import React, { useState } from 'react'
import axiox from "axios"

const AddTicket= () => {
   const data = [
        {
            label: "Event Name",
            type: "text",
            placeholder: "Enter your email adress here",
            name:"event_name"
        },
        {
            label: "Location",
            type: "text",
            placeholder: "Location",
            name:"location"
        },
        {
            label: "Starting date and time",
            type: "datetime-local",
            placeholder: "Enter date",
            name:"start_date"
        },
        {
            label: "Ending date and time",
            type: "datetime-local",
            placeholder: "Enter time",
            name:"end_date"
        },
        {
            label: "Cost",
            type: "number",
            placeholder: "Enter price",
            name:"cost"
        },
        {
            label: "About",
            type: "text",
            placeholder: "About the event",
            name:"about"
        }
   ]
   
   const [ eventValues, setEventValues ] = useState({
      event_name: '', 
      location: "",
      start_date: "",
      end_date: "",
      cost: "",
      about: " ",
   })

   const [ fileValue, setFileValue ] = useState("")
   
   const inputFieldChange = (e)=>{
      setEventValues({ ...eventValues, [e.target.name]: e.target.value })
   }
      
   const fileHandleChange = (e) =>{
      setFileValue(e.target.files[0])
   }
   const customHeaders = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImlhdCI6MTcwMzQ5NDQ3MSwiZXhwIjoxNzA0MzU4NDcxfQ.8KO_7EZ0iGi0Gv0pRtaHz29qlcDt44TGyqDdSUygglg',  // Replace with your actual authorization token
     // 'Content-Type': 'application/json',
      // Add any other headers you need
   };
   const SubmitEventFields = async ()=>{
      if (eventValues.event_name === "" || eventValues.location === "" || eventValues.start_date === "" || eventValues.end_date === "" || eventValues.cost === "" || eventValues.about === "" || fileValue === "") {
         alert("all fields must be filled")
         return false
      }

      const formData = new FormData()
      formData.append("event_name", eventValues.event_name)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
      formData.append("location", eventValues.location)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      formData.append("cost", eventValues.cost)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      formData.append("about", eventValues.about) 
      formData.append("start_date", eventValues.start_date) 
      formData.append("end_date", eventValues.end_date_date) 
      formData.append("event_image", fileValue) 

      const response = await axiox.post("http://localhost:8000/api/event/registerEvent", formData, {headers: customHeaders})
      const data = await response
      console.log(data.data)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
   }
  return (
     <main className='main_dashboard'>
         <div className='addTicket'>
               <h1>Add Ticket</h1>
               <div className='forms_container'>
               {
                  data?.map((data, index)=>{
                     return (
                        <div key={index}>
                           <label>{ data.label}</label>
                           <input onChange={inputFieldChange} type={data.type} placeholder={data.placeholder} name={ data.name} required/>
                        </div>
                     )
                  })
               }
           </div>
           
            <div className='upload_container'>
               <input onChange={fileHandleChange} type='file' />
               <p>Upload a document, image or PDF containin images or flyers for the event</p>
           </div>
           
            <div className='btn_container'>
               <button onClick={()=>SubmitEventFields()} className='addticket_btn'>Submit</button>
            </div>
         </div>
      </main>
  )
}

export default AddTicket
