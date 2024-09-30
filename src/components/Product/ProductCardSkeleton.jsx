import ContentLoader from "react-content-loader";
import React from "react";

export default function ProductCardSkeleton(props) {
	return (
		<ContentLoader
		style={{marginInline: 10}}
			speed={2}
			width={280}
			height={466}
			viewBox='0 0 280 466'
			backgroundColor='#dfdddd'
			foregroundColor='#ecebeb'
			{...props}>
			<circle cx='120' cy='110' r='105' />
			<rect x='5' y='231' rx='18' ry='18' width='229' height='34' />
			<rect x='104' y='180' rx='0' ry='0' width='43' height='20' />
			<rect x='5' y='283' rx='8' ry='8' width='229' height='69' />
			<rect x='10' y='363' rx='10' ry='10' width='76' height='33' />
			<rect x='109' y='359' rx='21' ry='21' width='121' height='40' />
		</ContentLoader>
	)
}
