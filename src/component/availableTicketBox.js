
"use client"
import Image from "next/image"
import TicketImage from "../../public/assets/IMG_0154.JPG"
const availableTicketBox = () => {
  const data = [1,2]
  return (
    <div>
      {
        data?.map((data, index)=>{
          return (
            <div key={ index} className='availble_container'>
              <div className='tickets'>
                <div className="ticket_image">
                  <Image
                    src={TicketImage}
                    alt="tiket" 
                    width={"100%"}
                    height={"100%"}
                  />
              </div>
              
              <div className="ticket_desc">
                  <div className="desc">
                      <h1>Uyo Bar Festival</h1>
                      <p>5:00pm Tue 12th, March 2024</p>
                      <span><span>N5,000</span> Per Ticket</span>
                  </div>
                  
                  <div className="remove_ticket">
                      <p>x Remove</p>
                  </div>
              </div>
            </div>
            
            <div className='breakdown'>
                <h1>Breakdown</h1>
                <div className="ticket_summary">
                  <div>
                    <p>Total Tickets: </p>
                    <p>1200</p>
                  </div>
                  <div>
                    <p>Number Available: </p>
                    <p>1200</p>
                  </div>
                  <div>
                    <p>Number Sold: </p>
                    <p>409</p>
                  </div>
                  <div>
                    <p>Revenue Generated:: </p>
                    <p>N2,045.00</p>
                  </div>
              </div>
            </div>
            </div>
          )
        })
      }
   </div>
  )
}

export default availableTicketBox
