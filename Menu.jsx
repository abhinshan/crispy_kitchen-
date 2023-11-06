import React from 'react'
import rating from './video/rating.png'

function Menu() {
  return (
    <div className='menu'>
        <div id='menu'>
            <div className='card'>
<img className='main_img' src="https://www.tooplate.com/templates/2129_crispy_kitchen/images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg" alt="" />

<p className='card_paragraph'>Morning Fresh
$12.50
4.3/5</p>
<img id='star' src={rating} alt="" />
<p className='card_paragraph'>    
100 Reviews</p>

</div>

<div className='card'>
<img className='main_img' src="https://www.tooplate.com/templates/2129_crispy_kitchen/images/lunch/farhad-ibrahimzade-MGKqxm6u2bc-unsplash.jpg" alt="" />

<p className='card_paragraph'>Tooplate Soup
$22.50
4.3/5</p>
<img id='star' src={rating} alt="" />
<p className='card_paragraph'>    
502 Reviews</p>
</div>



<div className='card'>
<img className='main_img' src="https://www.tooplate.com/templates/2129_crispy_kitchen/images/dinner/keriliwi-c3mFafsFz2w-unsplash.jpg" alt="" />


<p className='card_paragraph'>Premium steak
$45.78
4.5</p>
<img id='star' src={rating} alt="" />
<p className='card_paragraph'>    
1102 Reviews</p>
</div>



        </div>
        <div id='menu'>
            <div className='card'>
<img className='main_img' src="https://www.tooplate.com/templates/2129_crispy_kitchen/images/dinner/farhad-ibrahimzade-ZipYER3NLhY-unsplash.jpg" alt="" />

<p className='card_paragraph'>Seafood Set
$82.30
4.3/5</p>
<img id='star' src={rating} alt="" />
<p className='card_paragraph'>    
602 Reviews</p>

</div>

<div className='card'>
<img className='main_img' src="https://www.tooplate.com/templates/2129_crispy_kitchen/images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg" />

<p className='card_paragraph'>Burger Set
$69.80 <br />4.6/5 </p>



<img id='star' src={rating} alt="" />
<p className='card_paragraph'> 187 Reviews</p>
</div>



<div className='card'>
<img className='main_img' src="https://www.tooplate.com/templates/2129_crispy_kitchen/images/lunch/farhad-ibrahimzade-D5c9ZciQy_I-unsplash.jpg" alt="" />


<p className='card_paragraph'>Healthy soup
$18.00
4.3/5</p>
<img id='star' src={rating} alt="" />
<p className='card_paragraph'>    
452 Reviews</p>
</div>



        </div>
























    </div>
  )
}

export default Menu