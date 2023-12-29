import React from 'react'

const SettingsForms = () => {
    const data = [
        {
            label: "Real name",
            type: "text",
            placeholder: "",
            name:"real_name"
        },
        {
            label: "Email address",
            type: "email",
            placeholder: "name@gmail.com",
            name:"email"
        },
        {
            label: "Phone number",
            type: "text",
            placeholder: "",
            name:"phone_number"
        },
        {
            label: "Password",
            type: "password",
            placeholder: "",
            name:"password"
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

export default SettingsForms
