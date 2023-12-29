import React from 'react'

const Table = () => {
    const data = [1,2,3,4,5,6,7,7,]
  return (
    <div className='table_container'>
      <table>
        <thead>
            <tr className='table_head'>
                <th>Ref ID</th>
                <th>Ticket No</th>
                <th>Price(#)</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {data?.map((data, index)=>{
                return (
                    <tr key={index}>
                        <td>#1345364748447Tydud%</td>
                        <td>errt454</td>
                        <td>1500</td>
                        <td>13th, Dec 1999</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
