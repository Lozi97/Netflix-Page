/** @jsx jsx */
//import React from 'react'
import { css, jsx } from '@emotion/core'
import wallpaper from '../assets/poster.jpg'
import logo from '../assets/lockedup_logo.png'
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @function Home
 */
const Home = ({ children }) => (
  <div css={HomeCSS}>
    <div className="synopsis">
      <img src={logo} />

      <p style={{fontSize:'18px'}}>
      She was a victim of circumstances, not a true criminal. But in prison, she'll become the person she never thought she could be.
      </p>

      <button style={{ backgroundColor:'red'}}>
            <FontAwesomeIcon icon={faPlay} style={{ marginRight: '10.5px',fontsize: '18px'}} />Play
      </button>
      <button style={{ backgroundColor:'#181818'}}>
            <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: '10.5px',fontsize: '18px'}} />More Info
      </button>
    </div>

    {children}
  </div>
)

const HomeCSS = css`
  position: relative;
  background-image: url('${wallpaper}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 98vh;
  top: 0;

  .synopsis {
    padding-top: 200px;
    padding-left: 60px;
    max-width: 700px;
    color: white;
    padding-left: 60px;

    img {
      width: 70%;
      
    }

   button {
    background-repeat:no-repeat;
    border: none;
    overflow: hidden;  
    }
  }

  .Test {
    position: absolute;
    bottom: 20px;
  }
`
export default Home
