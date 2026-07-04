# Render `{"$global":{"persisted":true,"view":"cart","data":{"cart":[]},"serializedGlobals":{"data":true}}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <p
    class="cart"
  >
    cart is empty
  </p>
</section>
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
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <p
    class="cart"
  >
    cart is empty
  </p>
</section>
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
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <img
    alt="Product 2"
    class="thumb"
    src="/images/2.svg"
  />
  <h2
    class="title"
  >
    Product 2
  </h2>
  <div
    class="price"
  >
    $200.50
  </div>
  <button
    class="add"
  >
    added 0 of 2 (0 in cart)
  </button>
</section>
```
## Change
```
REMOVE: .add + p
INSERT: section > :is(.thumb, .title, .price, .add)
UPDATE: .thumb[src] null => "/images/2.svg"
UPDATE: .thumb[alt] null => "Product 2"
UPDATE: .title::text " " => "Product 2"
UPDATE: .price::text@1 "" => "200.50"
UPDATE: .add::text@11 "" => "2"
UPDATE: .add::text@14 "" => "0"
UPDATE: .add::text@6 "" => "0"
```

# Update `{"$global":{"persisted":true,"view":"item","productId":2,"data":{"cart":[]},"serializedGlobals":{"data":true}}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <img
    alt="Product 2"
    class="thumb"
    src="/images/2.svg"
  />
  <h2
    class="title"
  >
    Product 2
  </h2>
  <div
    class="price"
  >
    $200.50
  </div>
  <button
    class="add"
  >
    added 0 of 2 (0 in cart)
  </button>
  <ul
    class="recs"
  >
    <li>
      Product 3
    </li>
    <li>
      Product 4
    </li>
  </ul>
</section>
```
## Change
```
INSERT: .add + .recs
INSERT: .recs > li
INSERT: .recs > li:nth-of-type(1) + li
```

# Update
```js
container.querySelector("button.add").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <img
    alt="Product 2"
    class="thumb"
    src="/images/2.svg"
  />
  <h2
    class="title"
  >
    Product 2
  </h2>
  <div
    class="price"
  >
    $200.50
  </div>
  <button
    class="add"
  >
    added 1 of 2 (1 in cart)
  </button>
  <ul
    class="recs"
  >
    <li>
      Product 3
    </li>
    <li>
      Product 4
    </li>
  </ul>
</section>
```
## Change
```
UPDATE: .add::text@6 "0" => "1"
UPDATE: .add::text@14 "0" => "1"
```

# Update `{"$global":{"persisted":true,"persistedSeed":true,"view":"cart","data":{"cart":[2]},"serializedGlobals":{"data":true}}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <ul
    class="cart"
  >
    <li>
      Product 2 $200.5
    </li>
  </ul>
  <p
    class="total"
  >
    total $200.5
  </p>
</section>
```
## Change
```
REMOVE: .total + img
REMOVE: .total + h2
REMOVE: .total + div
REMOVE: .total + button
REMOVE: .total + ul
INSERT: section > :is(.cart, .total)
UPDATE: .total::text@7 "" => "200.5"
INSERT: .cart > li
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
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <ul
    class="cart"
  >
    <li>
      Product 2 $200.5
    </li>
  </ul>
  <p
    class="total"
  >
    total $200.5
  </p>
</section>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```
