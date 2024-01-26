import { useState } from 'react'
import Login from './pages/login'
import Home from './pages/Home'
import AddUser from './pages/AddUser'
import PublicRoute from './components/PublicRoutes'
import ProtectedRoute from './components/ProtectedRoutes'
import './app.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />

        <Route path='/home' element = {
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

        <Route path='/add-user' element = {
          <ProtectedRoute>
            <AddUser />
          </ProtectedRoute>
        } />
        
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
