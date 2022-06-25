import React from 'react'

function AdminListItem() {
  return (
    <div className='m-5' style={{marginRight: 10}} >
        <table class="table table-striped" >
  <thead>
    <tr>
      <th scope="col-3">Name</th>
      <th scope="col-3">Quantity</th>
      <th scope="col-3">Price</th>
      <th scope="col-3">Change Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      
      <td>
        <input type="number"></input>
        </td>
        <td>
        <button type="button" class="btn btn-warning" style={{backgroundColor: 'rgb(213, 102, 51)', color:'white'}}>Update</button>
        </td>
    </tr>
  </tbody>
</table>
{/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
    </div>
  )
}

export default AdminListItem