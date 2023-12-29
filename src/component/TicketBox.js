import React from 'react'

const TicketBox = () => {
  return (
        <div className='ticket_container'>
        <div className='ticket_box1'>
          <div className='sold'>
            <p>You have sold</p>
            <div style={{display: "flex", gap: "1rem"}}>
              <span style={{ fontSize: "50px" }}>
                130
              </span>
              <p>tickets todays</p>
            </div>
          </div>

          <div>
            <p>+4% Profit</p>
          </div>
        </div>

         <div className='ticket_box2'>
            <div className='sold'>
              <p>You have sold</p>
              <div style={{display: "flex", gap: "1rem"}}>
                <span style={{ fontSize: "50px" }}>
                  N13000
                </span>
              </div>
            </div>
          
            <div>
              <p>+4% Profit</p>
            </div>
          </div>
        </div>
  )
}

export default TicketBox
