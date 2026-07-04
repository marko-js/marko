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
UPDATE: .add::text@14 "" => "0"
UPDATE: .add::text@6 "" => "0"
UPDATE: .thumb[src] null => "/images/2.svg"
UPDATE: .thumb[alt] null => "Product 2"
UPDATE: .title::text " " => "Product 2"
UPDATE: .price::text@1 "" => "200.50"
UPDATE: .add::text@11 "" => "2"
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

# Update `{"$global":{"persisted":true,"view":"cart","data":{"cart":[]},"serializedGlobals":{"data":true}}}`
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
INSERT: section > .cart
REMOVE: .cart + img
REMOVE: .cart + h2
REMOVE: .cart + div
REMOVE: .cart + button
REMOVE: .cart + ul
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
  <p
    class="cart"
  >
    cart is empty
  </p>
</section>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```
