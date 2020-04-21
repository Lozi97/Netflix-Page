/** @jsx jsx */
import React, { useState, forwardRef } from 'react'
import { css, jsx } from '@emotion/core'
import netflixLogo from '../assets/netflix-logo.png'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { faSearch,faBell,faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const leftLinks = ['Home', 'TV Shows', 'Movies', 'Latest', 'My List']
/**
 * @function Navbar
 */
const Navbar = forwardRef((props, ref) => {
  const [scrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  // useEffect(() => {
  //   const handleScroll = () =>
  //     window.pageYOffset > 75 ? setScrolled(true) : setScrolled(false)

  //   const onScroll = window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', onScroll)
  //   }
  // }, [])

  return (
    <nav
      
      css={[
        NavbarCSS,
        scrolled
          ? css`
              background-color: rgb(20, 20, 20);
              background-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.7) 10%,
                rgba(0, 0, 0, 0)
              );
            `
          : css`
              background: transparent;
            `
      ]}
    >
      <ul>
        <li>
          <a href="/">
            <img height="75" src={netflixLogo} />
          </a>
        </li>

        {leftLinks.map(link => (
          <li  key={link}>
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>

      <ul className="right">
        <li>
        <FontAwesomeIcon icon={faSearch} style={{color: 'white',
      cursor: 'pointer',
      fontSize: '22px' }} />
        </li>
        <li>
        <FontAwesomeIcon icon={faGift} style={{color: 'white',
      cursor: 'pointer',
      fontSize: '22px' }} />
        </li>
        <li>
        <FontAwesomeIcon icon={faBell} style={{color: 'white',
      cursor: 'pointer',
      fontSize: '22px' }} />
        </li>
        
      </ul>
          
    
    </nav>
    
  )
})

const NavbarCSS = css`
  position: fixed;
  height: 68px;
  z-index: 99;
  width: 100%;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    align-items: center;
  }
  li {
    margin-right: 20px;
  }
  a {
    font-size: 15px;
    letter-spacing: 0.5px;
    color: #e5e5e5;
  }
  
`

export default Navbar
