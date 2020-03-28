import React from 'react'
import { Title } from './styles'
import logo from '../../assets/static/react.png'

export const Hello = () => (
  <>
    <Title>Hello SSR</Title>
    <img src={logo} alt='react logo' />
  </>
)