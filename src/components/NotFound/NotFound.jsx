import React from "react";
import style from "./NotFound.module.scss";

export default function NotFound() {
	return (
		<div className={style.container}>
			<h1>
				<span>😕</span>
				<br />
				Ничего не найдено
			</h1>
				<span className={style.text}>К сожалению данные страница отсутствует на нашем сайте</span>
		</div>
	)
}
