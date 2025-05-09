import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Budget from './pages/Budget'
import Discounts from './pages/Discounts'
import Tips from './pages/Tips'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App