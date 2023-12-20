import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import AddSurvey from '../pages/AddSurvey'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/add-survey' element={<AddSurvey/>}/>
    </Routes>
  )
}

export default AllRoutes