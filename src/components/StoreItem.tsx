import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { formatCurrency } from './../utilities/formatCurrency';
import { useContext } from 'react';
import { AppContext } from '../context/ShoppingCartContext';

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
    const { state, dispatch } = useContext(AppContext);
    const quantity = state.find(item => item.id === id)?.quantity || 0;

  return (
    <Card className='h-100'>
        <Card.Img variant='top' src={imgUrl} width="100px" height="500px" style={{ objectFit: 'cover' }} />
        <Card.Body className='d-flex flex-column'>
            <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                <span className='fs-2'>{name}</span>
                <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                { quantity === 0 ? 
                <Button className='w-100' onClick={ () => dispatch({type: 'increaseQuantity', payload: id})}>+ Add To Cart</Button> :
                <div className="d-flex align-items-center flex-column" style={{ gap: '.5rem' }}>
                    <div className="d-flex align-items-center justify-content-center" style={{ gap: '.5rem' }}>
                        <Button onClick={ () => dispatch({type: 'decreaseQuantity', payload: id})}>-</Button>
                        <div>
                            <span className='fs-3'>{quantity}</span> in cart
                        </div>
                        <Button onClick={ () => dispatch({type: 'increaseQuantity', payload: id})}>+</Button>
                    </div>
                    <Button variant='danger' size='sm' onClick={ () => dispatch({type: 'removeItem', payload: id})}>Remove</Button>
                </div>
                }
            </div>
        </Card.Body>
    </Card>
  )
}

export default StoreItem