import React from 'react'

const forms = () => {
    const data = [
        {
            label: "Event Name",
            type: "text",
            placeholder: "Enter your email adress here",
            name:"email"
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
            name:"date"
        },
        {
            label: "Ending date and time",
            type: "datetime-local",
            placeholder: "Enter time",
            name:"time"
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
  return (
    <div className='forms_container'>
        {
            data?.map((data, index)=>{
                return (
                    <div key={index}>
                        <label>{ data.label}</label>
                        <input type={data.type} placeholder={data.placeholder} name={ data.name} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default forms
