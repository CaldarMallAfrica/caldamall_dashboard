
import Image from 'next/image'
import TicketBox from "../component/TicketBox"
import Users from "../component/Users"
import Table from "../component/Table"
export default function Home() {
  return (
    <main className="main_dashboard">
      <div className='greeting'>
        <h2>Hello Mfon</h2>
        <p>Let the sales beging</p>
      </div>
      <TicketBox />
      <Users />
      <Table/>
    </main>
  )
}
