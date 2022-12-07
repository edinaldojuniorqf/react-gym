import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/Home/HomePage'
import { LoginPage } from '../pages/Login/LoginPage'

export function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  )
}