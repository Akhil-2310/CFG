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
    <div style={{fontSize: 25,  fontFamily:"'Quicksand', sans-serif"}}>
        <div class="row mt-4">
    <div class="col-9 border mx-auto">
        <span class="leftarrow"><img class="mt-1" src="" width="40px"></img></span>
        <div class="d-flex justify-content-start align-items-center" >
        {/* <i class="fa-solid fa-arrow-left fa-2x"  ></i> */}
        <button class="btn btn-primary btn-lg mt-2 ms-2 my-2" onClick={()=>goback()}>Back</button>
        </div>
        <hr/>
        <div class="row">
            <div class="col-5">
                <h5 class="p-3">Items: 4</h5>
            </div>
            <div class="col-5">
                <h5 class="p-3">Total Price: 662/- </h5>
            </div>
            <div class="col">
                {/* <a href="{% url 'checkout' %}" class="btn btn-success m-2" style="float: right; display: inline-block;">Checkout</a> */}
                <button class="btn btn-success btn-lg m-2" onClick={()=>gotocheckout()}  style={{float: 'right'}}>Checkout</button>
            </div>
        </div>
    </div>
</div>
<div class="row pt-5">
    <div class="col-9 border mx-auto">
        <div class="row">
       
            <div class="col-4">
                <h5 class="pt-3"><b>Item</b></h5>
            </div>
            <div class="col-2">
                <h5 class="pt-3"><b>Price</b></h5>


            </div>
            <div class="col-2">
                <h5 class="pt-3"><b>Quantity</b></h5>
            </div>
            <div class="col-2">
                <h5 class="pt-3"><b>Total</b></h5>
            </div>
        </div>
       <hr></hr>
        <div class="row">
        
            <div class="col-4">
                <p class="pt-4">Wheat</p>
            </div>
            <div class="col-2">
                <p class="pt-4">66</p>
            </div>
            <div class="col-2">
                <span>
                {/* style="display:inline-block" */}
                    <p class="pt-4" >2kgs</p>

                    {/* <img src="" style={{width:10,height:auto,display: inline}}></img>

                    <img src="" style={{width:10,height:auto,display: inline}}></img> */}
                </span>
        </div>
        <div class="col-2">
            <p class="pt-4">132</p>
        </div>
        </div>
        <div class="row">
        
            <div class="col-4">
                <p class="pt-4">Tomatoes</p>
            </div>
            <div class="col-2">
                <p class="pt-4">40</p>
            </div>
            <div class="col-2">
                <span>
                {/* style="display:inline-block" */}
                    <p class="pt-4" >5kgs</p>

                    {/* <img src="" style={{width:10,height:auto,display: inline}}></img>

                    <img src="" style={{width:10,height:auto,display: inline}}></img> */}
                </span>
        </div>
        <div class="col-2">
            <p class="pt-4">200</p>
        </div>
        </div>
        <div class="row">
        
            <div class="col-4">
                <p class="pt-4">Rajma</p>
            </div>
            <div class="col-2">
                <p class="pt-4">70</p>
            </div>
            <div class="col-2">
                <span>
                {/* style="display:inline-block" */}
                    <p class="pt-4" >3kgs</p>

                    {/* <img src="" style={{width:10,height:auto,display: inline}}></img>

                    <img src="" style={{width:10,height:auto,display: inline}}></img> */}
                </span>
        </div>
        <div class="col-2">
            <p class="pt-4">210</p>
        </div>
        </div>
        <div class="row">
        
            <div class="col-4">
                <p class="pt-4">Banana</p>
            </div>
            <div class="col-2">
                <p class="pt-4">20</p>
            </div>
            <div class="col-2">
                <span>
                {/* style="display:inline-block" */}
                    <p class="pt-4" >6kgs</p>

                    {/* <img src="" style={{width:10,height:auto,display: inline}}></img>

                    <img src="" style={{width:10,height:auto,display: inline}}></img> */}
                </span>
        </div>
        <div class="col-2">
            <p class="pt-4">120</p>
        </div>
        </div>
      
        
        
        
    </div>
</div>
    </div>
  )
}

export default Cart