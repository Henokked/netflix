import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css"

const Footer = () => {
  return (
   <>
   <div className='social_parent'>
      <div className='socials'>

      <li className='yellow'>
          <FacebookIcon color="inherit" style={{ color: "white" }} />
        </li>
        <li>
          <InstagramIcon color="inherit" style={{ color: "white" }} />
        </li>
        <li>
          <YouTubeIcon color="inherit" style={{ color: "white" }} />
        </li>
      </div>
      </div>
      <br/>
    <div className="footer">
     

      <ul className="list1">

        <li>Audio description</li>
        <li>Investor Relation</li>
        <li>legal notice</li>

        
      </ul>
      <ul className="list2">
        <li>Help center</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Contact Us</li>
     
      </ul>
      <ul className="list3">
        <li>Redeem Gift Cards</li>
        <li>Privacy</li>
        <li>Speed Test</li>
        <li>Account</li>


      </ul>
      <ul className="list4">
        <li>Media Center </li>
       
        <li>Buy Gift Cards</li>
        <li>Cookie Preferences</li>
        <li>Legal Notices</li>
     

      </ul>
      <div className="end">
    <h5>
      <li>Netflix US</li>
    </h5>
   
  </div>
    </div>
 
  </>
  
  )
}

export default Footer