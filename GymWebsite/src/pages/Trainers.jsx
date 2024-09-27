import React from 'react'
import Trainer_header from '../assets/images/Trainer_header.jpg'
import Trainer_1 from '../assets/images/Trainer_1.webp'
import Trainer_2 from '../assets/images/Trainer_2.webp'
import Trainer_3 from '../assets/images/Trainer_3.webp'
import '../styles/Trainer.css'

export default function Trainers() {
  return (
    <>
       <header className='header-top'>
        <div className='half-header trainer-half'>
          <h1 className='Trainers'>
            Meet your trainers
          </h1>
        </div>
          <div className='half-header img-half'>
            <img className='trainer_img' src={Trainer_header} alt='Trainer header'/>
          </div>
       </header>

      
        <div className='trainer-img-text-1'>
          <img className='Trainer-img' src={Trainer_1} alt='Personal-Trainer-1'/>
          <div className='trainer-description-1'>
            <h1 className='trainer-name'>
              John Adams
            </h1>
            <hr className='trainer-hr'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum nulla sed nam veritatis quisquam architecto! Soluta quis doloribus beatae nam culpa distinctio praesentium. Quae error explicabo ea dolorem magnam.</p>
          </div>
        </div>

        <div className='trainer-img-text-2'>
          <img className='Trainer-img-long' src={Trainer_2} alt='Personal-Trainer-2'/>
          <div className='trainer-description-2'>
            <h1 className='trainer-name'>
                Alex Jones
            </h1>
            <hr className='trainer-hr'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum nulla sed nam veritatis quisquam architecto! Soluta quis doloribus beatae nam culpa distinctio praesentium. Quae error explicabo ea dolorem magnam.</p>
          </div>
        </div>

        <div className='trainer-img-text-3'>
          <img className='Trainer-img-long' src={Trainer_3} alt='Personal-Trainer-1'/>
            <div className='trainer-description-3'>
              <h1 className='trainer-name'>
                  Luke James
              </h1>
              <hr className='trainer-hr'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum nulla sed nam veritatis quisquam architecto! Soluta quis doloribus beatae nam culpa distinctio praesentium. Quae error explicabo ea dolorem magnam.</p>
            </div>
        </div>
    </>
  )
}
