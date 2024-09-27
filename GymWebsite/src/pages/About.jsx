import React from 'react'
import Girlfight from '../assets/images/Girlfight.jpg'
import dumbbells from '../assets/images/dumbbells.webp'
import boxer_header from '../assets/images/boxer_header.jpg'
import Boxer_champ1 from '../assets/images/Boxer_champ1.jpg'
import Boxer_champ2 from '../assets/images/Boxer_champ2.jpg'
import Boxer_champ3 from '../assets/images/Boxer_champ3.jpg'
import '../styles/About.css'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div>
       <header className='top-header'>
        <div className='header-halfs about-us-half'>
          <h1 className='about-us'>
            ABOUT US 
          </h1>
        </div>
          <div className='header-halfs image-halfs'>
            <img className='boxer_header' src={boxer_header} alt='boxing_header'/>
          </div>
       </header>
       <div className='our-story'>
          <img className='girlfight' src={Girlfight} alt='girl fighting'/>
          <div className='gym-story'>
            <h1 className='story-title'> Our Story </h1>
            <hr className='story-hr'></hr>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex nesciunt nulla tenetur, ducimus omnis molestiae aliquid blanditiis at iste magni cumque vel reprehenderit explicabo ea facere earum beatae minus.</p>
          </div>
        </div>

        <div className='caterpillar-wrapper'>
            <h1 className='butterfly'>
              Now,<br/> How will your story <br/> <span style={{color:'red'}}>Finish?</span>
            </h1>
            <div className='boxing-champs'>
              <img className='champion-img' src={Boxer_champ1} alt="female boxing athlete"/>
              <img className='champion-img' src={Boxer_champ2} alt="male boxing athlete"/>
              <img className='champion-img' src={Boxer_champ3} alt="male boxing athlete"/>
            </div>
           <Link to="/SignUp"> <button className='signup-btn2'>Start Today!</button></Link>
        </div>
    </div>
  )
}


