import React from 'react'
import Forms from "../../../component/Forms"
import ImageUpload from "../../../component/ImageUpload"

const AddTicket= () => {
  return (
     <main className='main_dashboard'>
         <div className='addTicket'>
            <h1>Add Ticket</h1>
            <Forms/>
            <ImageUpload/>
            <div className='btn_container'>
               <button className='addticket_btn'>Submit</button>
            </div>
         </div>
      </main>
  )
}

export default AddTicket
