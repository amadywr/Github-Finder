import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ showBlur }) => {
  return (
    <footer className={`${showBlur && 'blur'}`}>
      <p>
        Made by -{' '}
        <Link to={'users/amadywr'} className='footer-author'>
          Ahmad Yawari
        </Link>
      </p>
    </footer>
  )
}

export default Footer
