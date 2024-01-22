import React from "react";
import "../components/ItemsTable.css";

export const ItemsTable = ({
	items,
	removeItem,
	increaseCount,
	decreaseCount,
}) => (
	<table className="price-table">
		<thead>
			<tr>
				<th>Наименование товара:</th>
			</tr>
		</thead>
		<tbody className="price-block">
			{items.map(({ id, name, price, img, count }) => (
				<tr key={id}>
					<td>{name}</td>
					<td>{price}</td>
					<td>
						<img src={img} alt="phone" />
					</td>
					<td>
						<button
							className="minus_button"
							onClick={() => decreaseCount(id, count)}>
							-
						</button>
						<span className="count">{count}</span>
						<button className="plus_button" onClick={() => increaseCount(id)}>
							+
						</button>
					</td>
					<td>{price * count}</td>
					<td>
						<button
							className="cancellation_button"
							onClick={() => removeItem(id)}>
							Отменить
						</button>
					</td>
				</tr>
			))}
		</tbody>
	</table>
);
