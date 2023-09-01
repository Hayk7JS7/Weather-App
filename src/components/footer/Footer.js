import React from 'react';
import gitHub from '../../assets/logos/github.svg';
import './Footer.css'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <footer>
    <p>Copyright © {year}</p>
    <p>
        <a href="https://github.com/Hayk7JS7" target="_blank">
            <img src={gitHub} alt="github" />
        </a>
    </p>
    </footer>
  )
}

export default Footer