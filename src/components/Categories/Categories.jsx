import React from 'react'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

export default function Categories({ setCategory, categoryId }) {
	return (
		<div className='categories'>
			<nav className='categories__menu'>
				<ul className='categories__list'>
					{categories.map((category, index) => (
						<li
							key={index}
							onClick={() => setCategory(index)}
							className={`categories__item ${categoryId === index ? 'categories-active' : ''}`}>
							{category}
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
