import React from 'react'
import tea from './video/tea2.mp4'
import steak from './video/steack.mp4'

function video() {
  return (
    <div id='main'>
      <video className='tea' autoPlay loop src={tea}>
        
      </video>

      <div className='delicious'> 
      
      <p className='steak'> Delicious 
      Steaks </p>
<p className='p'>4.4/5</p>
<p className='p'>from1,206+ Customer Reviews</p>
</div>
<video className='ste_vid' src={steak} autoPlay loop ></video>
    </div>
  )
}

export default video