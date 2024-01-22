import React, { useState } from "react";
import { defaultItems } from "../data";
import { ItemsTable } from "./ItemsTable";
import "../components/ShoppingCard.css";

export const ShoppingCart = () => {
	const [items, setItems] = useState(defaultItems);

	const result = items.reduce(
		(previousValue, currentItem) =>
			previousValue + currentItem.count * currentItem.price,
		0
	);

	const Footer = (
		<div className="result-panel">
			<span>
				Общая стоимость: <span className="value">{result}</span> сом
			</span>
		</div>
	);

	const EmptyTemplate = (
		<div className="empty-text">У вас еще нет товаров в корзине</div>
	);

	const handleRemoveItem = (id) => {
		setItems(items.filter((item) => item.id !== id));
	};

	const handleIncreaseCount = (id) => {
		setItems((prevItems) =>
			prevItems.map((item) => {
				if (item.id === id) {
					return { ...item, count: item.count + 1 };
				}
				return item;
			})
		);
	};

	const handleDecreaseCount = (id) => {
		setItems((prevItems) =>
			prevItems.map((item) => {
				if (item.id === id) {
					return { ...item, count: item.count === 0 ? 0 : item.count - 1 };
				}
				return item;
			})
		);
	};

	return (
		<>
			<h1 className="parent_title">Phone Store</h1>
			{!!items.length ? (
				<ItemsTable
					items={items}
					removeItem={handleRemoveItem}
					increaseCount={handleIncreaseCount}
					decreaseCount={handleDecreaseCount}
				/>
			) : (
				EmptyTemplate
			)}
			{!!items.length && Footer}
			{items.map(({ id, name, count }) =>
				count > 0 ? <h3 key={id}>{name}</h3> : null
			)}
		</>
	);
};
