import React from 'react'
import './web-development.css'
import fsimg1 from './compoments/assets/stack_icon_151083.png'
function Webdevelopment() {
  return (
    <>
        <div className='uk-background-muted fswd-main-div1'>
            <div className='fswd-main-flex-1'>
                <div className='fswd-main-flex-div1'>
                    <div className='k1'>
                        <div className='fswd-main-icon'>
                            <img src={fsimg1} alt="" />
                        </div>
                        <div className='fswd-main-heading'>
                            <h2>FULL-STACK WEB DEVELOPMENT</h2>
                            <p>
                                Full stack web development course is a highly practical and
                                hands-on course offered by amFOSS from Amrita
                                Vishwa Vidyapeetham.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='fswd-main-flex-div2'>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Webdevelopment