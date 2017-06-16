export function getProduct(productId, category, products) {
	const byCategory = category in products ? products[category] : [];
	const product = byCategory.find(p => p.id === productId)
	return product;
}