import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import CartPage from './pages/CartPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import './styles/scss/index.scss'

export default function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	)
}
