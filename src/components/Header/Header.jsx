import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className='header container'>
			<div className='header__inner'>
				<Link to='/' style={{ display: 'flex', gap: 10 }}>
					<img src='/img/header/logo.svg' alt='' className='header__logo' />
					<div className='header__info'>
						<h1 className='header__info-title'>REACT PIZZA</h1>
						<span className='header__info-description'>самая вкусная пицца</span>
					</div>
				</Link>
				<Link to='/cart'>
					<div className='header__cart'>
						<ul className='header__cart-list'>
							<li className='header__cart-item'>520 ₽</li>
							<li className='header__cart-item'>
								<img
									src='/img/header/cart.svg'
									alt=''
									width={22}
									height={22}
									className='header__cart-icon'
								/>
								<span className='header__cart-count'>3</span>
							</li>
						</ul>
					</div>
				</Link>
			</div>
		</header>
	)
}
