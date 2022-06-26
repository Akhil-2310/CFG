import React from 'react'
import './style.css'
function Footer() {
  return (
    <div>
      <div className="footer-dark">
    <footer>
        <div className="container">
            <div className="row" style={{"font-family":"'Quicksand', sans-serif", "font-weight":"bold"}}>
                <div className="col-sm-6 col-md-3 item">
                    <h3>Quick links</h3>
                    <ul >
                        <li><a href="#" > Home</a></li>
                        <li><a href="#">our team</a></li>
                        <li><a href="#"> photo gallery</a></li>
                        <li><a href="#"> our partners</a></li>
                        <li><a href="#"> get involved</a></li>

                    </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                    <h3>Programs</h3>
                    <ul>
                        <li><a href="#">NGO Feeding Program</a></li>
                        <li><a href="#">Breakfast Feeding Program for School Children</a></li>
                        <li><a href="#">Food Rescue program</a></li>
                        
                      
                    </ul>
                </div>
                    <div className="col-sm-6 col-md-3 item">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><a href="#">Site No. 3 & 4, KHB Colony, Airport By-Pass Road, Yelahanka, Bangalore – 560064, India</a></li>
                        <li><a href="#">+91 9538035252</a></li>
                        <li><a href="#"> info@bangalorefoodbank.com</a></li>
                        

                    </ul>
                    </div>
                
               
                <div className="col item social"><a href="#"><i class="fa-brands fa-instagram"></i></a><a href="#"><i class="fa-brands fa-twitter"></i></a><a href="#"><i class="fa-brands fa-snapchat"></i></a><a href="#"><i class="fa-brands fa-facebook"></i></a></div>
            </div>
            <p className="copyright">©copyright 2020-21 Banglore Food Bank All Rights Reserved 2018</p>
        </div>
    </footer>
</div>
    </div>
  )
}

export default Footer