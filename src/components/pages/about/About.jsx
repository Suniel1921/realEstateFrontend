
import React from 'react'
import './about.css';
import About_Card from './About_Card';

const About = () => {
  return (
    <div>
      <div className='Top-div'>
      {/* <img src='https://img.freepik.com/free-photo/door-opening-revealing-beautiful-city_23-2149768547.jpg?uid=R98263876&ga=GA1.1.1863079335.1717151144&semt=ais_user-customized' alt="house" id='image' /> */}
      <img src="/image/banner.png" alt="" />
        <div className='Top-content'>
            <h1 className='top-heading'>
                About Real Estate Innovation
            </h1>

            <p className='top-p'>
                <b>Real Estate Innovation Pvt. Ltd. </b>is a premier real estate agency in Nepal, celebrated for its excellence and leadership in the industry. Over the past 15 years, we have built a reputation for trust and reliability, offering unparalleled services that have solidified our standing as a leading company in the real estate market.
            </p>
        </div>
        
      </div>
      <div className='mid-content coantainer'>
            {/* <p className='mid-contentp'>
            With over 50 dedicated agents, Real Estate Innovation Pvt. Ltd. has been serving clients with honesty and integrity for the past 15 years. Our clients trust us for our reliable services.
            </p> */}
            {/* <p className='mid-contentp'>
            We offer a wide range of property options and have successfully provided over 1000 properties to date. We take the time to understand our clients' needs and match them with the right properties. Additionally, we provide legal advice through our experienced lawyers and offer quick loan services.
            </p>
            <p className='mid-contentp'>
            If you're looking for a trusted real estate brokerage in Nepal, contact Real Estate Innovation Pvt. Ltd. today to experience our excellent services.
            </p> */}
        </div>
        <div className='service'>
            <h1 className='service-heading'>
                Our Services
            </h1>
            <p className='servicep'>
            At <b>Real Estate Innovation Pvt. Ltd.</b>, we are dedicated to being your trusted partner in real estate. We offer professional expertise, market knowledge, and a seamless experience throughout your property journey.
            </p>
        </div>
        <About_Card/>
        

    </div>
  )
}

export default About
