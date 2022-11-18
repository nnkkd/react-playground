import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { UseStateEffect } from './pages/UseStateEffect'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>

        <Route path={'/useState-effect'} element={<UseStateEffect />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
