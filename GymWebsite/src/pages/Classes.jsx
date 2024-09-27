import React from 'react'
import '../styles/Classes.css'
import class_1 from'../assets/images/class_1.webp'
import class_2 from'../assets/images/class_2.webp'
import class_3 from'../assets/images/class_3.webp'

export default function Classes() {
  return (
    <div>
      <header className='header-gymclass'>
        <h1>
          Classes
        </h1>
      </header>
      <div className='classes-wrapper-1'>
          <img className='classes-img' src={class_1} alt='Boxing class image'/>
          <div className='classes-description-1'>
            <h1 className='class-name'>
              Resistance Training
            </h1>
            <hr className='trainer-hr'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum nulla sed nam veritatis quisquam architecto! Soluta quis doloribus beatae nam culpa distinctio praesentium. Quae error explicabo ea dolorem magnam.</p>
            <button className='book-now'>Book now!</button>
          </div>
        </div>

        <div className='classes-wrapper-2'>
          <img className='classes-img' src={class_2} alt='Boxing class image'/>
          <div className='classes-description-2'>
            <h1 className='class-name'>
                Cardio
            </h1>
            <hr className='trainer-hr'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum nulla sed nam veritatis quisquam architecto! Soluta quis doloribus beatae nam culpa distinctio praesentium. Quae error explicabo ea dolorem magnam.</p>
            <button className='book-now'>Book now!</button>
          </div>
        </div>

        <div className='classes-wrapper-3'>
          <img className='classes-img' src={class_3} alt='Boxing class image'/>
            <div className='classes-description-3'>
              <h1 className='class-name'>
                  Boxing drills 
              </h1>
              <hr className='trainer-hr'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum nulla sed nam veritatis quisquam architecto! Soluta quis doloribus beatae nam culpa distinctio praesentium. Quae error explicabo ea dolorem magnam.</p>
              <button className='book-now'>Book now!</button>
            </div>
        </div>
      

    </div>
  )
}
 