import React, { useState } from 'react'

const typeNames = ['тонкое', 'традиционное']

export default function ProductCard({ title, price, imageUrl, sizes, types }) {
	const [count, setCount] = useState(0)
	const [activeType, setActiveType] = useState(0)
	const [activeSize, setActiveSize] = useState(0)

	const handleAddProduct = () => setCount(prev => prev + 1)

	return (
		<article className='product-card'>
			<img className='product-card__image' src={imageUrl} alt='Pizza' />
			<h4 className='product-card__title'>{title}</h4>

			<div className='product-card__menu'>
				<ul className='product-card__list-dough'>
					{types.map((type, index) => (
						<li
							key={index}
							onClick={() => setActiveType(type)}
							className={`product-card__item-dough ${activeType === type ? 'product-card-active' : ''}`}>
							{typeNames[type]}
						</li>
					))}
				</ul>
				<ul className='product-card__list-size'>
					{sizes.map((size, index) => (
						<li
							key={index}
							className={`product-card__item-size ${activeSize === index ? 'product-card-active' : ''}`}
							onClick={() => setActiveSize(index)}>
							{`${size} см`}
						</li>
					))}
				</ul>
			</div>
			<div className='product-card__footer'>
				<div className='product-card__price'>от {price} ₽</div>
				<button
					className='product-card__button button'
					onClick={handleAddProduct}
					aria-label='Добавить продукт'>
					<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
							fill='white'
						/>
					</svg>
					<span>Добавить</span>
					{count ? <span className='product-card__button-count'>{count}</span> : null}
				</button>
			</div>
		</article>
	)
}
