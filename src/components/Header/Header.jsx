import React, { useRef } from 'react'
import { Container } from 'reactstrap'
import "./Header.css"
import logo from '../../assets/images/byjus-logo.png'

const navLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'Courses',
        url: '#'
    },
    {
        display: 'About',
        url: '#'
    }
]

const Header = () => {

    const menuRef = useRef();

    const menuToggle = () => menuRef.current.classList.toggle 
    ('active_menu')

  return (
    <header className= "header" style={{background: '#f1cde1'}}>
        <Container>
            <div className='navigation d-flex alig-items-center 
            justify-content-between'>
                <div className='logo'>
                    <h2 className='d-flex align-items-center
                    justify-content-between'>
                        <img src={logo} alt=""/>Byjus
                    </h2>
                </div>

                <div className="nav d-flex align-item-center
                gap-5">
                    <div className="nav_menu" ref={menuRef}
                    onClick={menuToggle}>
                        <ul className='nav_list'>

                            {
                                navLinks.map((item, index) => (
                                    <li key={index}
                                    className='nav_item'>
                                        <a href={item.url}>
                                            {item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                <div className='nav_right'>
                    <p className='mb-0 d-flex align-items-center
                    gap-2'></p>
                    <button className='btn-sign_in'>SIGN IN</button>
                </div>
                </div>

                <div classNmame='mobile_menu'>
                    <span><i className='ri-menu-line' 
                    onClick={menuToggle}></i></span>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header