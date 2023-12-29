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
            label: "Date",
            type: "date",
            placeholder: "Enter date",
            name:"date"
        },
        {
            label: "Time",
            type: "time",
            placeholder: "Enter time",
            name:"time"
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
