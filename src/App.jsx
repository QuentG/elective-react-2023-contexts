import React from 'react'
import './App.css'
import Main from './Main'
import AuthProvider from './provider/AuthProvider'

const App = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  )
}

export default App
