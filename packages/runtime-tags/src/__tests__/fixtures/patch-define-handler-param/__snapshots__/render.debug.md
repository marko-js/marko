# Render `{"id":"1"}`
```html
<h1>
  Product 1
</h1>
<button>
  Add to cart
</button>
<p>
  Cart: 
</p>
```

# Update `{"id":"2"}`
```html
<h1>
  Product 2
</h1>
<button>
  Add to cart
</button>
<p>
  Cart: 
</p>
```
## Change
```
UPDATE: h1::text@8 "1" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<h1>
  Product 2
</h1>
<button>
  Add to cart
</button>
<p>
  Cart: 2
</p>
```
## Change
```
UPDATE: p::text@6 "" => "2"
```
