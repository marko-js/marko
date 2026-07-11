export const products = [
  { id: "1", name: "Aurora Lamp", price: 49 },
  { id: "2", name: "Basalt Mug", price: 18 },
  { id: "3", name: "Cirrus Throw", price: 89 },
];

export function getProduct(id) {
  return products.find((p) => p.id === id);
}
