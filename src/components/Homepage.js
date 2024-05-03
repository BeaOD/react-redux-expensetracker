import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css'
import { LuVerified } from 'react-icons/lu';


function Homepage() {
  return (
    <>


      <div expand="lg" className='div1'>
        <div style={{ color: 'brown', display: 'flex', justifyContent: 'center' }}>
          <p style={{ fontSize: '80px', fontFamily: 'arial', alignItems: 'center' }}>EXPENSE TRACKER</p>

        </div>

        
      <div className='divv2'>
        <p style={{ fontSize: '30px', fontFamily: 'arial', alignItems: 'center', color: 'brown' }}>
          Keep Track of Daily Expenditure
        </p>
        <p className='verify'><LuVerified/></p>
      </div>
      </div>
      <div className='image1'>
        <img src='images/mathieu-stern-1zO4O3Z0UJA-unsplash.jpg' alt=''/>
      </div>



    </>
  );
}

export default Homepage;