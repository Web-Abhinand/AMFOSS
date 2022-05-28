import './header.css'
import img1 from './assets/Training3.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
function Header() {
  const [showNav,setshowNav]=useState(false);
  return (
    <>
        <nav className='nav1'>
            <div className='nav-flex'>
                <div className='logo'>
                    <img src={img1} alt="" />
                </div>
                <div className='nav-links'>
                    <div className='nav-link_home'>
                        Home
                    </div>
                    <div className='nav-link_courses'>
                        Cources
                    </div>
                    <div className='nav-link_contacts'>
                        Contact
                    </div>
                </div>
                <div className='hamburgermenu'>
                    <GiHamburgerMenu onClick={()=>{setshowNav(!showNav)}} className="ham"/>
                </div>
            </div>
            {showNav?<div className='Mobile-menu'>
                <div>
                    <div>
                        <button>Home</button>
                    </div>
                    <div>
                        <button>Abour Us</button>
                    </div>
                    <div>
                        <button>Contacts</button>                 
                    </div>
                </div>
            </div>:null}
        </nav>
        
    </>
  )
}

export default Header