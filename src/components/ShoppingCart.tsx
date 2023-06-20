import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { AppContext } from '../context/ShoppingCartContext';
import { useContext } from 'react';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';
import { CartItem } from './CartItem';

type ShoppingCartProps = {
    isOpen: boolean
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
    const { state, closeCart } = useContext(AppContext);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
            { state.map(item => (
                <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
                Total{" "}
                {formatCurrency(
                state.reduce((total, cartItem) => {
                    const item = storeItems.find(i => i.id === cartItem.id)
                    return total + (item?.price || 0) * cartItem.quantity
                }, 0)
                )}
            </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart