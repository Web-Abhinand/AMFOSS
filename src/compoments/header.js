import './header.css'
import img1 from './assets/Training3.png'
function Header() {

  return (
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
        </div>
    </nav>
  )
}

export default Header