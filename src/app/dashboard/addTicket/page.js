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
         </div>
      </main>
  )
}

export default AddTicket
