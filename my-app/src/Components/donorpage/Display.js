import React from 'react'
import { useState } from 'react';

function Display({ props }) {

  const [users,setUsers]=useState(props);
  console.log(users)
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <th scope="row">1</th>
                <td>{user.name}</td>
                <td>{user.donation}</td>
                <td>priceee</td>
                <td>{user.phone}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Display