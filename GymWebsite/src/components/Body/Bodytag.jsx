import React from 'react'
import boxing_class from '../../assets/images/boxing_class (1).webp'
import boxing_training from '../../assets/images/boxing_training (1).webp'
import './Body.css'
import { Link } from 'react-router-dom';

export default function body() {
  return (
  <div>
      <div className='body-box'>
        <div className='offer-container'>
          <h1 className='offer'>Our offer</h1>
          
        </div>
      </div>
      <div className='card-box'>
       
          <Link to='/SignUp'>
            <div className='card-items' id='card-1'>
              <h1 className='deal-name'>12 month saver</h1>
              <p>Explore our ultra 12 month saver </p>
            </div>
          </Link>

          <Link to='/SignUp'>
            <div className='card-items' id='card-2'>
              <h1 className='deal-name'>6 month deal</h1>
              <p>Join us for a 6-month special!</p>
            </div>
          </Link>

          <Link to='/SignUp'>
            <div className='card-items' id='card-3'>
              <h1 className='deal-name'>Monthly rolling </h1>
              <p>Join us on a monthly basis</p>
            </div>
          </Link>

         <Link to='/SignUp'>
            <div className='card-items ' id='card-4'>
              <h1 className='deal-name'>Student deals</h1>
              <p>Explore our student deals</p>
            </div>
         </Link>
      </div>
      <div className='gym-wrapper'>
        <h1 className='indoor-header'>
            Have a look <br/>inside !
        </h1>
        <div className='content-box'>
          <svg className='opening-quote' height="48px" version="1.1" viewBox="0 0 48 48" width="48px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g id="Artboard-Copy" transform="translate(-407.000000, -9.000000)"><path d="M448.6211,37.1646 C448.3691,36.3886 447.9321,35.6776 447.3241,35.0346 C446.6871,34.3626 445.8501,33.8426 444.8121,33.4666 C443.7731,33.0936 442.4391,32.9046 440.7951,32.9046 L438.5641,32.9046 C438.8301,30.1586 439.8081,27.8216 441.5001,25.8896 C443.1891,23.9636 445.5311,22.2686 448.5251,20.8146 L446.7091,18.0006 C442.7671,19.6796 439.3941,22.1356 436.5921,25.3796 C433.7911,28.6266 432.3961,31.8436 432.3961,35.0346 C432.3961,38.4626 433.2051,41.1516 434.8361,43.0926 C436.4671,45.0336 438.8031,46.0006 441.8401,46.0006 C443.7671,46.0006 445.4411,45.3576 446.8651,44.0726 C448.2871,42.7896 449.0001,41.2866 449.0001,39.5726 C449.0001,38.7456 448.8751,37.9406 448.6211,37.1646 M428.2251,37.1646 C427.9711,36.3886 427.5351,35.6776 426.9261,35.0346 C426.2911,34.3626 425.4531,33.8426 424.4141,33.4666 C423.3771,33.0936 422.0431,32.9046 420.3981,32.9046 L418.1661,32.9046 C418.4331,30.1586 419.4101,27.8216 421.1011,25.8896 C422.7911,23.9636 425.1351,22.2686 428.1271,20.8146 L426.3121,18.0006 C422.3691,19.6796 418.9981,22.1356 416.1951,25.3796 C413.3941,28.6266 412.0001,31.8436 412.0001,35.0346 C412.0001,38.4626 412.8071,41.1516 414.4391,43.0926 C416.0681,45.0336 418.4041,46.0006 421.4431,46.0006 C423.3691,46.0006 425.0451,45.3576 426.4691,44.0726 C427.8911,42.7896 428.6031,41.2866 428.6031,39.5726 C428.6031,38.7456 428.4761,37.9406 428.2251,37.1646" fill="#000000" id="quote2"/><g id="slices" transform="translate(47.000000, 9.000000)"/></g></g></svg>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi non vero, expedita nisi laborum est officia cumque sequi? Nostrum iure, voluptate necessitatibus veritatis vitae doloribus labore libero eius voluptas ratione.</p>
          <svg className='closing-quotes' height="48px" version="1.1" viewBox="0 0 48 48" width="48px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g id="Artboard-Copy" transform="translate(-347.000000, -9.000000)"><path d="M352.377,27.8345 C352.631,28.6105 353.066,29.3245 353.676,29.9645 C354.313,30.6365 355.15,31.1585 356.19,31.5325 C357.225,31.9055 358.559,32.0975 360.205,32.0975 L362.438,32.0975 C362.17,34.8405 361.191,37.1775 359.502,39.1095 C357.813,41.0375 355.469,42.7305 352.475,44.1845 L354.289,46.9995 C358.234,45.3205 361.606,42.8655 364.406,39.6195 C367.209,36.3735 368.602,33.1555 368.602,29.9645 C368.602,26.5365 367.795,23.8485 366.164,21.9065 C364.533,19.9655 362.199,19.0015 359.158,19.0015 C357.234,19.0015 355.557,19.6415 354.135,20.9265 C352.711,22.2115 352,23.7145 352,25.4295 C352,26.2535 352.127,27.0585 352.377,27.8345 M372.775,27.8345 C373.027,28.6105 373.465,29.3245 374.072,29.9645 C374.711,30.6365 375.549,31.1585 376.584,31.5325 C377.623,31.9055 378.957,32.0975 380.602,32.0975 L382.832,32.0975 C382.566,34.8405 381.588,37.1775 379.898,39.1095 C378.207,41.0375 375.867,42.7305 372.871,44.1845 L374.688,46.9995 C378.631,45.3205 382.004,42.8655 384.805,39.6195 C387.606,36.3735 389,33.1555 389,29.9645 C389,26.5365 388.191,23.8485 386.561,21.9065 C384.932,19.9655 382.598,19.0015 379.557,19.0015 C377.629,19.0015 375.955,19.6415 374.533,20.9265 C373.109,22.2115 372.398,23.7145 372.398,25.4295 C372.398,26.2535 372.522,27.0585 372.775,27.8345" fill="#000000" id="quote1"/><g id="slices" transform="translate(47.000000, 9.000000)"/></g></g></svg>
        </div> 
      </div>

      
      <div className='classes-wrapper'>
        <div className='speech-container'>
          <h1 className='motivation-speech'> 
            At <span  style={{color:'red', fontStyle:'italic'}}> The Infantry</span> <br/> We accommodate all skill levels
          </h1>
        </div>
        <div className='classes-trainers'>
         <div className='boxing-class'>
            <Link to='/Classes'>
              <img className='img-boxing-class'src={boxing_class} alt='classes' loading='lazy'/>
              <div className='class-trainer-description'>
                <h1>Unlimited Classes</h1>
                <p>We have unlimited classes available for all members</p>
              </div>
            </Link>
          </div>
          <div className='personal-trainers'>
            <Link to="/Trainers">
              <img className='img-boxing-trainer'src={boxing_training} alt='personal-trainers' loading='lazy'/>
              <div className='class-trainer-description' >
                <h1>Personal trainers</h1>
                <p>Our Personal Trainers are always available to help you meet your goal</p>
              </div>
            </Link>
          </div>
        </div>
        <div className='journey-speech-container'>
          <h1 className='journey-speech'>
            Are you ready to start <br/> <span style={{color:'red', fontStyle:'italic'}}>Your journey?</span>  
          </h1>
        </div>
      </div>

      <div className='footer'>
        <div className='footer-flex'>

        </div>
      </div>
  </div>
  
    
  )
}
