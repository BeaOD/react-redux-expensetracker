import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LuVerified } from 'react-icons/lu';


function Homepage() {
  return (
    <>


      <div expand="lg" style={{ backgroundColor: 'black', height: '550px' }}>
        <div style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>
          <p style={{ fontSize: '80px', fontFamily: 'Roboto', alignItems: 'center' }}>EXPENSE TRACKER</p>

        </div>

        
      <div style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>
        <p style={{ fontSize: '30px', fontFamily: 'Roboto', alignItems: 'center', color: 'white' }}>
          Keep Track of Daily Expenditure
        </p>
        <p><LuVerified/></p>
      </div>
      </div>



    </>
  );
}

export default Homepage;