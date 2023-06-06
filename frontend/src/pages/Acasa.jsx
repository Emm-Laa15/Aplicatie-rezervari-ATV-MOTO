import React from 'react'
import { Link } from 'react-router-dom'
import ATV1 from '../imagini/atv12.png'
import ATV2 from '../imagini/atv12.png'
import ATV3 from '../imagini/atv12.png'
import ATV4 from '../imagini/atv12.png'
import bicicleta1 from '../imagini/bicicleta12.png'
import ATV6 from '../imagini/bicicleta12.png'

function Acasa() {
  return (
    <div className="container-acasa">
      <Link to='/rezervare-noua/ATV1' className='image'>
        <img src={ATV1} alt='ATV 1' />
        <div className="image-overlay">
          <h1>ATV CF Moto CForce 450 L</h1>
          <h2>AB-21-BSR</h2>
          <h3>Click pentru a rezerva.</h3>
        </div>
      </Link>

      <Link to='/rezervare-noua/ATV2' className='image'>
        <div className="image">
          <img src={ATV2} alt='ATV 2' />
          <div className="image-overlay">
            <h1>ATV CF Moto CForce 450 L</h1>
            <h2>AB-29-BSR</h2>
            <h3>Click pentru a rezerva.</h3>
          </div>
        </div>
      </Link>

      <Link to='/rezervare-noua/ATV3' className='image'>
        <div className="image">
          <img src={ATV3} alt='ATV 3' />
          <div className="image-overlay">
            <h1>ATV CF Moto CForce 450 L</h1>
            <h2>AB-22-BSR</h2>
            <h3>Click pentru a rezerva.</h3>
          </div>
        </div>
      </Link>

      <Link to='/rezervare-noua/ATV4' className='image'>
        <div className="image">
          <img src={ATV4} alt='ATV 4' />
          <div className="image-overlay">
            <h1>ATV CF Moto CForce 450 L</h1>
            <h2>AB-26-BSR</h2>
            <h3>Click pentru a rezerva.</h3>
          </div>
        </div>
      </Link>

      <Link to='rezervare-noua/Bicicleta1' className='image'>
        <div className="image">
          <img src={bicicleta1} alt='bicicleta 1' />
          <div className="image-overlay">
            <h1>Bicicleta electrica Neuzer E-City Zagon - 26'</h1>
            <h2>XR-6-4</h2>
            <h3>Click pentru a rezerva.</h3>
          </div>
        </div>
      </Link>

      <Link to='/rezervare-noua/ATV6' className='image'>
        <div className="image">
          <img src={ATV6} alt='ATV 6' />
          <div className="image-overlay">
            <h1>Bicicleta electrica Neuzer E-City Zagon - 26'</h1>
            <h2>FIVE STARS 26</h2>
            <h3>Click pentru a rezerva.</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Acasa;
