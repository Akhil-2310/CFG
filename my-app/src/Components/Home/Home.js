import React from 'react'

function Home() {
  return (
    <div>
      {/* //<!-- carousel--> */}
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
     <img src="https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2QlMjBiYW5rJTIwZG9uYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="d-block w-100" style={{"height":"700px" ,"width":"30rem"}}alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
     <img src="https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2QlMjBiYW5rJTIwZG9uYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="d-block w-75 " style={{"height":"700px" ,"width":"30rem"}}alt="..."/>
    </div>
    <div class="carousel-item">
     <img src="https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2QlMjBiYW5rJTIwZG9uYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="d-block w-100" style={{"height":"700px" ,"width":"30rem"}}alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      <p>CSR Funding: Feeding Bangalore Foundation has an established track record of more than 5 years in undertaking projects/programmes in the field of FOOD BANKING, is eligible to take up the CSR programs under Section 135 of Companies Act 2013 and our activities are aligned to Schedule VII (1) Eradicating Hunger, Poverty and Malnutrition.
        Tax Exemption:<br /> All contributions to Feeding Bangalore Foundation is eligible for exemption under 80G of Income Tax Act 1961.
      </p>
      <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">our team</a></li>
                  <li><a href="#">photo gallery</a></li>
                  <li><a href="#">our partners</a></li>

                </ul>
              </div>
              <div class="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li><a href="#">NGO Feeding Program</a></li>
                  <li><a href="#">Breakfast Feeding Program for School Children</a></li>
                  <li><a href="#">Food Rescue program</a></li>
                </ul>
              </div>
              <div class="col-md-6 item text">
                <h3>Company Name</h3>
                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
              </div>
              <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
            </div>
            <p class="copyright">Company Name © 2018</p>
          </div>
        </footer>
      </div></div>
  )
}

export default Home