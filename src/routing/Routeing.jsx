import React from 'react'
import { Route, Routes } from 'react-router'
import Heros from '../pages/Heros'
import Neog from '../pages/Neog'
import Layout from '../layout/Layout'
import AmaderSomporke from '../pages/AmaderSomporke'

const Routeing = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Layout />} />
        <Route index element={<Layout />} />
        <Route path='hero' element={<Heros />} />
        <Route path='neog' element={<Neog />} />
        <Route path='amadersomporke' element={<AmaderSomporke />} />
        {/* <Route path='model' element={<ModalExample />} /> */}
    </Routes>
    </>
  )
}

export default Routeing