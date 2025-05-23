import React from 'react'
import Button from './Button'

const CardProduct = ({product, backgroundColor, buttonColor}) => {

    const {name, price, description, img} = product;
    return (
        <div>
            <div style={{width: '380px', height: '550px', border: '2px', backgroundColor, borderRadius: '28px', textAlign: 'center', paddingTop: '15px'}}>
                <img src={img} alt={name}/>
                <p style={{fontWeight: 700, textAlign:'left', paddingLeft: '20px'}}>{name}</p>
                <p style={{fontWeight: 700, textAlign:'left', paddingLeft: '20px'}}>{price}</p>
                <p style={{fontWeight: 600, textAlign:'left', paddingLeft: '20px'}}>{description}</p>
                <Button style={{ backgroundColor: buttonColor, color: '#000' }}></Button>
            </div>
        </div>
    )
    }

export default CardProduct