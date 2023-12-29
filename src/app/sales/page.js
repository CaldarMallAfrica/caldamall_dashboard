import React from 'react'
import TicketBox from '@/component/TicketBox'
import Graph from "../../component/graph"
import Users from '@/component/Users'
import Table from '@/component/Table'
const Sales= () => {
  return (
     <main className="main_dashboard">
      <div className='greeting'>
        <h2>Hello Mfon</h2>
        <p>Let the sales beging</p>
      </div>
     <TicketBox/>
     <Graph/>
     <Users/>
     <Table/>
    </main>
  )
}

export default Sales
