# Task: Product pages and JSON API

Build part of a storefront with Marko 6 and @marko/run file-based routing. The app is served by @marko/run's dev server; `marko` and `@marko/run` are already installed. All routes live under `src/routes/`.

## Existing file (do not write or modify it)

```js
/* src/catalog.js */
export const products = [
  { id: "1", name: "Aurora Lamp", price: 49 },
  { id: "2", name: "Basalt Mug", price: 18 },
  { id: "3", name: "Cirrus Throw", price: 89 },
];

export function getProduct(id) {
  return products.find((p) => p.id === id);
}
```

## Requirements
- Page route `/products/:id` (dynamic id segment) renders the matching product from the catalog module: name inside `<h1 id="product-name">`, and the price rendered as `$PRICE` inside `<p id="product-price">` (e.g. `$18`).
- If there is no product for the id, the page shows the text `Product not found` inside `<h1 id="product-name">` instead.
- API route: a `GET` request to `/api/products/:id` returns the product as JSON (`content-type` including `application/json`, body exactly the product object). For an unknown id it returns HTTP status 404 with JSON body `{"error":"not found"}`.
- The API route must be implemented as a route handler module (no `.marko` page for it).

## Output
Return every file you create (paths relative to the app root).
