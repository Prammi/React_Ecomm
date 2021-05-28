import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return (
<main>
      <PageHero title='Checkout'/>
      <Wrapper className="page">
      <h1>Your cart is empty</h1>
      <button className="btn"><Link to="/products"></Link>Fill it </button>
    </Wrapper></main>
  )
}
const Wrapper = styled.div``
export default CheckoutPage
