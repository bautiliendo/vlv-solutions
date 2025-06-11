'use client'

import { ReactTyped } from "react-typed"

export default function ClientTypedComponent() {
  return (
    <ReactTyped
      className='font-medium text-blue-600'
      strings={['Visión', 'Negocio', 'Objetivo', 'Misión']}
      typeSpeed={70}
      backSpeed={70}
      loop
    />
  )
}