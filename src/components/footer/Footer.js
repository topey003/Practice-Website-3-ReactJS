import React from 'react'
import './Footer.css'
import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className='social'>
            <FaFacebook className='icon'/>
            <FaInstagram className='icon'/>
            <FaTwitter className='icon'/>
            <FaPinterest className='icon'/>
        </div>
        <div className='container'>
            <div className='col'>
                <h3>About</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About Us</p>
            </div>
            <div className='col'>
                <h3>Company</h3>
                <p>Future</p>
                <p>Employment</p>
                <p>Scheduling</p>
                <p>Development</p>
            </div>
            <div className='col'>
                <h3>Legal</h3>
                <p>Hiring</p>
                <p>Terms</p>
                <p>Policies</p>
                <p>Advertising</p>
            </div>
            <div className='col'>
                <h3>Information</h3>
                <p>Developers</p>
                <p>Programs</p>
                <p>Funding</p>
                <p>Financial</p>
            </div>
        </div>
    </div>
  )
}

export default Footer