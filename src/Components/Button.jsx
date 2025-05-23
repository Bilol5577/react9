import React from 'react'

const Button = ({ children, onClick, style }) => {
  return (
    <button 
      onClick={onClick} 
      style={{
        padding: ' 26px 129px',
        borderRadius: '28px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: ' 2px 8px 2px black',
        border: '2px solid black',
        ...style
      }}
    >
      {children}Add to card
    </button>
  )
}

export default Button