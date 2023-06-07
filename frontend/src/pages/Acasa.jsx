import React from 'react'
import { Link } from 'react-router-dom'
import ATV1 from '../imagini/atv11.png'
import ATV2 from '../imagini/atv11.png'
import ATV3 from '../imagini/atv11.png'
import ATV4 from '../imagini/atv11.png'
import bicicleta1 from '../imagini/bicicleta12.png'
import bicicleta2 from '../imagini/bicicleta12.png'

function Acasa() {
  return (
    <div className="container-acasa">
      <Link to='/rezervare-noua/ATV1' className='image'>
        <img src={ATV1} alt='ATV 1' />
        <div className="image-overlay">
          <h1>ATV CF Moto CForce 450 L</h1>
          <h2>AB-21-BSR</h2>
        </div>
      </Link>

      <Link to='/rezervare-noua/ATV2' className='image'>
        <div className="image">
          <img src={ATV2} alt='ATV 2' />
          <div className="image-overlay">
            <h1>ATV CF Moto CForce 450 L</h1>
            <h2>AB-29-BSR</h2>

          </div>
        </div>
      </Link>

      <Link to='/rezervare-noua/ATV3' className='image'>
        <div className="image">
          <img src={ATV3} alt='ATV 3' />
          <div className="image-overlay">
            <h1>ATV CF Moto CForce 450 L</h1>
            <h2>AB-22-BSR</h2>

          </div>
        </div>
      </Link>

      <Link to='/rezervare-noua/ATV4' className='image'>
        <div className="image">
          <img src={ATV4} alt='ATV 4' />
          <div className="image-overlay">
            <h1>ATV CF Moto CForce 450 L</h1>
            <h2>AB-26-BSR</h2>

          </div>
        </div>
      </Link>

      <Link to='rezervare-noua/Bicicleta1' className='image'>
        <div className="image">
          <img src={bicicleta1} alt='bicicleta 1' />
          <div className="image-overlay">
            <h1>Bicicleta electrica Neuzer E-City Zagon</h1>
            <h2>XR-6-4</h2>

          </div>
        </div>
      </Link>

      <Link to='/rezervare-noua/Bicicleta2' className='image'>
        <div className="image">
          <img src={bicicleta2} alt='Bicicleta 2' />
          <div className="image-overlay">
            <h1>Bicicleta electrica Neuzer E-City Zagon</h1>
            <h2>FIVE STARS 26</h2>

          </div>
        </div>
      </Link>
    </div>
  )
}

export default Acasa;
