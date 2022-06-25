import React from 'react'
import {useNavigate} from 'react-router-dom'

function Cart() {
    const navigate = useNavigate()
    const goback=()=>{
      navigate('/listitems')
    }
    const gotocheckout=()=>{
        navigate('/checkout')
      }
  return (
    <div>
        <div class="row mt-4">
    <div class="col-9 border mx-auto">
        <span class="leftarrow"><img class="mt-1" src="" width="40px"></img></span>
        <div class="d-flex justify-content-start align-items-center" >
        <i class="fa-solid fa-arrow-left fa-2x"  ></i>
        <button class="btn btn-primary mt-2 ms-2" onClick={()=>goback()}>Back</button>
        </div>
        <hr/>
        <div class="row">
            <div class="col-5">
                <h5 class="p-3">Items: 5</h5>
            </div>
            <div class="col-5">
                <h5 class="p-3">Total Price: 780 </h5>
            </div>
            <div class="col">
                {/* <a href="{% url 'checkout' %}" class="btn btn-success m-2" style="float: right; display: inline-block;">Checkout</a> */}
                <button class="btn btn-success m-2" onClick={()=>gotocheckout()}  style={{float: 'right'}}>Checkout</button>
            </div>
        </div>
    </div>
</div>
<div class="row pt-5">
    <div class="col-9 border mx-auto">
        <div class="row">
       
            <div class="col-4">
                <h5 class="pt-3">Item</h5>
            </div>
            <div class="col-2">
                <h5 class="pt-3">Price</h5>


            </div>
            <div class="col-2">
                <h5 class="pt-3">Quantity</h5>
            </div>
            <div class="col-2">
                <h5 class="pt-3">Total</h5>
            </div>
        </div>
       
        <div class="row">
        
            <div class="col-4">
                <p class="pt-4">name</p>
            </div>
            <div class="col-2">
                <p class="pt-4">250</p>
            </div>
            <div class="col-2">
                <span>
                {/* style="display:inline-block" */}
                    <p class="pt-4" >5</p>

                    {/* <img src="" style={{width:10,height:auto,display: inline}}></img>

                    <img src="" style={{width:10,height:auto,display: inline}}></img> */}
                </span>
        </div>
        <div class="col-2">
            <p class="pt-4">3689</p>
        </div>
        </div>
      
        
        
        
    </div>
</div>
    </div>
  )
}

export default Cart