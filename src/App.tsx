import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { UseStateEffect } from './pages/UseStateEffect'
import { Form } from './pages/Form'
import { ToDo } from './pages/ToDo'
import UseContext from './pages/UseContext'
import { UseReducer } from './pages/UseReducer'
function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home />}></Route>
                <Route path={'/useState-effect'} element={<UseStateEffect />}></Route>
                <Route path={'/useContext'} element={<UseContext />}></Route>
                <Route path={'/form'} element={<Form />}></Route>
                <Route path={'/todo'} element={<ToDo />}></Route>
                <Route path={'/useReducer'} element={<UseReducer />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
