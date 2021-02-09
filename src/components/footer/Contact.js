import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="app-cont">
      <div className="contact-cont">
        <h3>Contact</h3>
        <div className="contact-details-cont">
          <div className="address-cont">
            <p>Genial</p>
            <p>2 Rosslyn Avenue</p>
            <p>East Barnet, Herts</p>
            <p>EN4 8DH</p>
          </div>
          <div className="enquiry-cont">
            <p>For initial enquiries ask for Jonathan Mears</p>
            <a href="tel:02083617400">
              <FaPhoneAlt size={20} className="phone icon" />
              020 8361 7400
            </a>
            <a href="mailto:info@genial.co.uk">
              <FaRegEnvelope size={20} className="email icon" />
              info@genial.co.uk
            </a>
          </div>
        </div>
      </div>
      <p className="credit">Website developed by <a href="https://www.tom-mears.co.uk/" target='_blank' rel="noreferrer">Tom Mears</a><span> &copy;</span></p>
    </div>
  );
}

export default Contact;
