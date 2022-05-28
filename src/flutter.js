import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import './flutter.css'
function Flutter() {
  return (
    <div className='flutter-div1'>
       <div className='flutter-heading'>
          <h1>Flutter</h1>
          <p>
            Welcome to The Complete Flutter App Development Course and
            hands-on course offered by amFOSS from Amrita
            Vishwa Vidyapeetham.
          </p>
      </div> 
      <div className='flutter-maindiv1-buttons'>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Course Module</Button>
          <Button variant="contained">Register Now</Button>
        </Stack>
      </div>
    </div>
  )
}

export default Flutter;