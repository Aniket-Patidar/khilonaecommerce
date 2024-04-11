import React from 'react'
import Nav from '../pages/Nav'

const Layout = ({children}) => {
  return (
    <>
    <Nav/>
    {children}
    </>
  )
}

export default Layout