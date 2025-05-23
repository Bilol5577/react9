import React from 'react'
import CardProduct from './Components/CardProduct'



const App = () => {

  const products =[
    {
      product: {
        name: "NIKE AIR FORCE 1 ‘07 (white/black)",
        price: '$89.99',
        description: 'I lost left shoe, don’t need this one anymore. Please buy it.',
        img: '/Nike.png',
      },
      backgroundColor: 'rgba(203, 203, 203, 1)',
      buttonColor: 'rgba(165, 165, 165, 1)'
    },
    {
      product: {
        name: "NIKE AIR FORCE 1 ‘07 (white/black)",
        price: '$89.99',
        description: 'I lost left shoe, don’t need this one anymore. Please buy it.',
        img: '/Nike.png',
      },
      backgroundColor: 'rgba(92, 167, 255, 1)',
      buttonColor: 'rgba(255, 199, 0, 1)'
    },
    {
      product: {
        name: "NIKE AIR FORCE 1 ‘07 (white/black)",
        price: '$89.99',
        description: 'I lost left shoe, don’t need this one anymore. Please buy it.',
        img: '/Nike.png',
      },
      backgroundColor: 'rgba(208, 131, 255, 1)',
      buttonColor: 'rgba(0, 255, 178, 1)'
    },
    {
      product: {
        name: "NIKE AIR FORCE 1 ‘07 (white/black)",
        price: '$89.99',
        description: 'I lost left shoe, don’t need this one anymore. Please buy it.',
        img: '/Nike.png',
      },
      backgroundColor: 'rgba(255, 153, 226, 1)',
      buttonColor: 'rgba(255, 245, 0, 1)'
    },
    {
      product: {
        name: "NIKE AIR FORCE 1 ‘07 (white/black)",
        price: '$89.99',
        description: 'I lost left shoe, don’t need this one anymore. Please buy it.',
        img: '/Nike.png',
      },
      backgroundColor: 'rgba(197, 193, 199, 1)',
      buttonColor: 'rgba(0, 255, 178, 1)'
    },
    {
      product: {
        name: "NIKE AIR FORCE 1 ‘07 (white/black)",
        price: '$89.99',
        description: 'I lost left shoe, don’t need this one anymore. Please buy it.',
        img: '/Nike.png',
      },
      backgroundColor: 'rgba(92, 255, 98, 1)',
      buttonColor: 'rgba(255, 199, 0, 1)'
    },
  ]
  return (
    <div style={{background: 'linear-gradient(154.48deg, #2A5AF7 4.61%, #AB229B 78.86%)',}}>
      <h1 style={{marginLeft: '210px', color: 'white'}}>Products</h1>
      <div className="kartochki" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '60px' }}>
        {products.map((product, index) => (
          <CardProduct 
            key={index}
            product={product.product}
            backgroundColor={product.backgroundColor}
            buttonColor={product.buttonColor}
          />
        ))}
      </div>
    </div>
  )
}

export default App