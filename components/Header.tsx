import React from 'react'
import utilStyles from '../styles/utils.module.css'

function Header({ text }) {
  text = text.toUpperCase();
  return <h2 className={utilStyles.headerThin}>{text}</h2>
}

export default Header
