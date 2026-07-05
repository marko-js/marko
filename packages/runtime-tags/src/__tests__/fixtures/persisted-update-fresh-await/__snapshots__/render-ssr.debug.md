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
container.querySelector("button.count").click();
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
```
## Change
```
INSERT: .count + h2
REMOVE: h2 + p
UPDATE: h2::text@8 "" => "7"
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
INSERT: ul > li
INSERT: ul > li:nth-of-type(1) + li
```

# Update
```js
container.querySelector("button.count").click();
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
INSERT: .count + p
REMOVE: p + h2
REMOVE: p + ul
```

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
INSERT: .count + h2
REMOVE: ul + p
UPDATE: h2::text@8 "" => "3"
INSERT: h2 + ul
INSERT: ul > li
INSERT: ul > li:nth-of-type(1) + li
```
