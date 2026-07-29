# Render `{"productId":0,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<p>
  pick a product
</p>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<p>
  pick a product
</p>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update update frame 1 of 2
```html
<button
  class="count"
>
  clicked 1
</button>
<h2>
  Product 7
</h2>
loading reviews…
```
## Change
```
INSERT: h2
REMOVE: .count + p
INSERT: h2 + ::text("loading reviews…")
```

# Update `{"productId":7,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<h2>
  Product 7
</h2>
<ul>
  <li>
    Product 7 works great rated 5
  </li>
  <li>
    Product 7 is okay rated 3
  </li>
</ul>
```
## Change
```
INSERT: h2 + ul
REMOVE: ul + ::text("loading reviews…")
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<h2>
  Product 7
</h2>
<ul>
  <li>
    Product 7 works great rated 5
  </li>
  <li>
    Product 7 is okay rated 3
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update update frame 1 of 2

# Update `{"productId":0,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 2
</button>
<p>
  pick a product
</p>
```
## Change
```
INSERT: p
REMOVE: .count + h2
REMOVE: .count + ul
```

# Update update frame 1 of 2

# Update `{"productId":3,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 2
</button>
<h2>
  Product 3
</h2>
<ul>
  <li>
    Product 3 works great rated 5
  </li>
  <li>
    Product 3 is okay rated 3
  </li>
</ul>
```
## Change
```
INSERT: p + h2
REMOVE: .count + p
INSERT: h2 + ul
INSERT: ul > :is(li, li)
```
