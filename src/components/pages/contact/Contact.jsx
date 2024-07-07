import React from 'react';
import '../contact/contact.css';
import { MdLocationPin } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='top-banner'>
        <img src='https://img.freepik.com/free-photo/front-view-man-working-as-real-estate-agent_23-2151064985.jpg' alt="Banner" className='banner' />
        <h1 className='contact-title'>Contact</h1>
      </div>
      <div className='title'>
        <h1>Get In Touch With Us</h1>
        <p>
          Real Estate Innovation Pvt. Ltd. is Nepal's premier real estate agency, renowned for trust and excellence. For 15 years, we've offered unparalleled services, solidifying our leadership in the market.
        </p>
      </div>
      <div className='card-container'>
        <div className='card gridblue'>
          <div className='icon-container'>
            <MdLocationPin className='icon' />
          </div>
          <h3>Our Location</h3>
          <h4>Khumaltar, Lalitpur</h4>
        </div>
        <div className='card'>
          <div className='icon-container'>
            <FaPhoneVolume className='icon' />
          </div>
          <h3>Phone Number</h3>
          <h4>+977 9703808523</h4>
        </div>
        <div className='card gridblue'>
          <div className='icon-container'>
            <HiOutlineMailOpen className='icon' />
          </div>
          <h3>Email Us</h3>
          <h4>info@realestate.com.np</h4>
        </div>
        <div className='card'>
          <div className='icon-container'>
            <IoMdClock className='icon' />
          </div>
          <h3>Working Hours</h3>
          <h4>Sun - Sat | 10:00 - 6:00</h4>
        </div>
      </div>
      <div className='lower-div'>
        <div className='map-container'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.5503737649301!2d85.31976286954102!3d27.649236986471266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1700591bd493%3A0x4c81a39ea96acfb2!2sReal%20Estate%20Innovations%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1719986237146!5m2!1sen!2snp"
            width="300"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className='form-container'>
          <form>
            <div className="form-group">
              <input id="fullName" type="text" placeholder="Full Name" />
            </div>
            <div className="form-group">
              <input id="email" type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input id="number" type="text" placeholder="Number" />
            </div>
            <div className="form-group">
              <textarea id="message" placeholder="Your Message"></textarea>
            </div>
            <div className="form-actions">
              <button type="submit" className='sendButton'>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
