import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories/Categories.jsx'
import ProductCard from '../components/Product/ProductCard.jsx'
import ProductCardSkeleton from '../components/Product/ProductCardSkeleton.jsx'
import Sort from '../components/Sort/Sort.jsx'

export default function HomePage({ category, sort }) {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const [selectedCategory, setSelectedCategory] = useState(0)
	const [selectedSort, setSelectedSort] = useState(0)

	useEffect(() => {
		axios.get('https://66f9d182afc569e13a99be7d.mockapi.io/products').then(response => {
			setProducts(response.data)
			setIsLoading(false)
		})
	}, [])

	return (
		<>
			<div className='categories__container container'>
				<Categories setCategory={setSelectedCategory} categoryId={selectedCategory} />
				<Sort setSort={setSelectedSort} sortId={selectedSort} />
				{console.log(selectedCategory, selectedSort)}
			</div>

			<section className='section container'>
				<div className='section__header'>
					<h1 className='section__title'>Все пиццы</h1>
				</div>
				<div className='products'>
					<ul className='products__list grid grid--4'>
						{isLoading
							? [...new Array(4)].map(() => <ProductCardSkeleton />)
							: products.map(product => (
									<li className='products__item' key={product.id}>
										<ProductCard {...product} />
									</li>
							  ))}
					</ul>
				</div>
			</section>
		</>
	)
}
