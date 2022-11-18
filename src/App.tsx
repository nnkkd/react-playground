import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { UseStateEffect } from './pages/UseStateEffect'
import { Form } from './pages/Form'
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/useState-effect'} element={<UseStateEffect />}></Route>
        <Route path={'/form'} element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
