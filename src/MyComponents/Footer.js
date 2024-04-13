import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    width: "100vw"
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>
      Copyright &copy; mytodoslist.com
      </p>
    </footer>
  )
}
