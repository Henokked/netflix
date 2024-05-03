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

        <li><a href="">FAQ</a></li>
        <li><a href="">Investor Relation </a></li>
        <li><a href="">Ways to Watch</a></li>

        <li><a href="">Corporate Information</a></li>
        <li><a href="">Netflix Originals</a></li>
      </ul>
      <ul className="list2">
        <li><a href="">Home</a></li>
        <li><a href="">Jobs</a></li>
        <li><a href="">Terms of Use</a></li>
        <li><a href="">Contact Us</a></li>
     
      </ul>
      <ul className="list3">
        <li><a href="">Account</a></li>
        <li><a href="">Redeem Gift Cards</a></li>
        <li><a href="">Privacy</a></li>
        <li><a href="">Speed Test</a></li>


      </ul>
      <ul className="list4">
        <li><a href="">Media Center</a> </li>
       
        <li><a href="">Buy Gift Cards</a></li>
        <li><a href="">Cookie Preferences</a></li>
        <li><a href="">Legal Notices</a></li>
     

      </ul>
      <div className="end">
    <h5>
      <a href="">Netflix US</a>
    </h5>
   
  </div>
    </div>
 
  </>
  
  )
}

export default Footer