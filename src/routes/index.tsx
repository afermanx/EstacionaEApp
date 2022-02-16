import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Parking from '../pages/Parking'


export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/parking/:id' element={<Parking />} />
    </Routes>
  )
}
