import React from 'react'
import insta from './video/instagram.png'
import facebook from './video/facebook.png'
import twitter from './video/twitter.png'
import youtube from './video/youtube.png'



function Footer() {
  return (
    <div className='footer'>


<div className='footer_head'>
<div className='footer_text1'>
    <h1>Crispy Kitchen</h1>
    
    <h2>location</h2>

    <p>121 Enstein Loop N,Bronx, Ny 10475,united states</p>


</div>
<div className='footer_text1'>
  <br /><br /><br /><br /><br /><br />

<h1>Opening Hours</h1>
    
    <p>Monday</p>
  <p>10:00AM - 08:00 PM</p>
      <p>Tel:010-02-0340</p>


</div>
<div className='footer_text1'>
  <br /><br /><br /><br /><br /><br />
    <h1>Social</h1>
    <div className='social_media'>
    <img className='foot_img_copy' src={insta} alt="" />
    <img className='foot_img_copy' src={facebook} alt="" />
    <img className='foot_img_copy' src={twitter} alt="" />
    <img className='foot_img_copy' src={youtube} alt="" />
    </div>
 
<p className='copyright'>Copyright©2022 Crispy Kitchen CO.,Ltd.
  Disign:Tooplate
</p>
  

</div>
 



</div>




    </div>
  )
}

export default Footer