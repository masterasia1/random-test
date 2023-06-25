import React from 'react'

const Footer = () => {
    const  today = new Date ()
  
    return (
    
    <footer>
        <p> It's {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer