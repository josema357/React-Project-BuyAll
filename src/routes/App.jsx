import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../styles/index.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/recovery-password" element={<PasswordRecovery/>} />
        <Route path="/send-email" element={<SendEmail/>} />
        <Route path="/new-password" element={<NewPassword/>} />
        <Route path="/account" element={<MyAccount/>} />
        <Route path="/signup" element={<CreateAccount/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="*" element={<NotFound/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App