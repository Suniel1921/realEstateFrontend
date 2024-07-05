


import React from 'react'
import '../contact/contact.css'

const Contact = () => {
  return (
    <>
    <div className='container-top'>
      <img src="" alt="" />
    </div>
<div className="container-contact">
      <div className="contact-grid">
        <div className="contact-info">
          <h2><u> Contact Real </u> Estate  Innovation Pvt. Ltd.</h2>

          <p className='contact-par'>Are you looking for any kind of help and assistance? Send us a message or give us a call. We are here to provide you with more information and deal with your queries.</p>
          <p className='contact-par' >Talk to our customer representative to inquire about the process of selling / buying properties on Realestateinnov.com .</p>
          <div className="contact-details contact-detail">
            <span className="font-bold">Call us:</span> <a href="tel:9800000000" className="link">9800000000</a>
            {/* <span className="font-bold"> Whatsapp:</span> <a href="https://wa.me/9800000000" className="link">9800000000</a> */}
          </div>
          <div className="contact-detail">
            <span className="font-bold">Email us:</span> <a href="mailto:example@gmail.com" className="link">example@gmail.com</a>
          </div>
          <div className="address">
            <span className="font-bold">Address:</span>
            <p>Real Estate Innovation Pvt. Ltd.</p>
            <p>Khumultar, Lalitpur Nepal</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" type="text" placeholder="Full Name"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Email "/>
            </div>
            <div className="form-group">
              <label htmlFor="number">Number</label>
              <input id="number" type="text" placeholder="Number"/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Your Message"></textarea>
            </div>
            <div className="form-actions">
              <button type="button">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <div className='bottom'>
        <h1>
          <u>Visit Our</u> Office
        </h1>
        <div className='reponsive-map'>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.5503737649301!2d85.31976286954102!3d27.649236986471266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1700591bd493%3A0x4c81a39ea96acfb2!2sReal%20Estate%20Innovations%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1719986237146!5m2!1sen!2snp" 
            width="600" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
