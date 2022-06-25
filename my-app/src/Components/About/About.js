import React from 'react'

function About() {
  return (
    <div>
      <div>
        <h1 className='display-6'>ABOUT</h1>
        <div className='d-flex m-3 p-3'>
          <div className='card w-75'>
            <h3 className='display-6 text-center p-3'>WHO WE ARE</h3>
            <hr />
            <p className='lead p-3'>Bangalore Food Bank was started on 16th October 2014, the World Food Day 2014 and registered as Feeding Bangalore Foundation on 24th December 2014 under Section 8 of Companies Act 2013 with a vision to address the issues of hunger, malnutrition and food wastage. The foundation runs various programs such as "The NGO Feeding Program" to support NGOs running residential programs with their monthly grocery requirements, "Food Rescue Program" to prevent food wastage, "Breakfast Feeding Program for school children" at schools and "Food Relief Programs" in emergency situations. Thanks to the efforts of our benefactor donors, Bangalore Food Bank has procured 519 tons of food products till date. Through this, we were able to make more than 54 lakhs feeds to the needy.</p>
          </div>
          <div className='resize-auto m-4'>
            <img src='https://huntingdonhealth.com/wp-content/uploads/sites/49/2018/10/people-with-happy-faces-WEB-300x214.jpg' alt='okayy' />
          </div>
        </div>
      </div>
      <div className='d-flex m-3 p-3 w-75'>
        <div>
          <div className='card'>
            <h3 className='display-6 p-3'>WHY WE EXIST</h3>
            <hr />
            <p className='lead p-3'>We aim to eradicate hunger at the basic level. Through our efforts, we want to ensure that the voices of the malnourished and the hungry in India are heard and their needs are satisfied. We also want to raise awareness amongst people that a lot of food that is potentially getting wasted can be used to feed the many hungry stomachs in Bangalore.</p>
          </div>
          <div className='card '>
            <h3 className='display-6 p-3'>WHAT WE DO</h3>
            <hr />
            <p className='lead p-3'>Our purpose is to feed those who struggle to feed themselves. Through our food distribution network, we connect donors with those who need the food the most.</p>
          </div>
        </div>
        <div className='m-2 w-100'>
          <img src='https://www.prospectmagazine.co.uk/content/uploads/2017/06/children.jpg' alt='okayy' />
        </div>
        <div className='card w-100'>
          <h3 className='display-6 w-100 p-3'>OUR MISSION</h3>
          <hr />
          <p className='lead'>To create a supportive environment that will address the issues of hunger and malnutrition</p>
          <p className='lead'>To improve nutritional interventions by reinforcing the interaction between the various actors in the programme</p>
          <p className='lead'> To develop a sustainable system that ends food wastage at all levels of its supply chain from harvest to the consumption phase</p>
          <p className='lead'> To mobilize various resources and to build a culture of innovations to accomplish zero hunger</p>
          <p className='lead'> To create and promote nationwide awareness and to lend a voice to those who are not heard.</p>
        </div>
      </div>
    </div >
  )
}

export default About