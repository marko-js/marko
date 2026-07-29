# Render `{"$global":{"persisted":true,"view":"cart","tag":"all","data":{"cart":[]},"serializedGlobals":{"data":true}}}`
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
  <nav
    class="tags"
  >
    <b
      class="on"
      data-tag="all"
    >
      ALL
    </b>
    <b
      data-tag="dev"
    >
      DEV
    </b>
    <b
      data-tag="news"
    >
      NEWS
    </b>
  </nav>
  <p
    class="cart"
  >
    cart is empty
  </p>
</section>
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
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <nav
    class="tags"
  >
    <b
      class="on"
      data-tag="all"
    >
      ALL
    </b>
    <b
      data-tag="dev"
    >
      DEV
    </b>
    <b
      data-tag="news"
    >
      NEWS
    </b>
  </nav>
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
  loading recommendations…
</section>
```
## Change
```
REMOVE: section > nav
REMOVE: section > p
INSERT: section > :is(.thumb, .title, .price, .add)
UPDATE: .thumb[src] null => "/images/2.svg"
UPDATE: .thumb[alt] null => "Product 2"
UPDATE: .title::text "" => "Product 2"
UPDATE: .price::text@1 "" => "200.50"
UPDATE: .add::text@14 "" => "0"
INSERT: .add + ::text("loading recommendations…")
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"item","productId":2,"data":{"cart":[]},"serializedGlobals":{"data":true}}}`
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
REMOVE: .recs + ::text("loading recommendations…")
```

# Update
```js
document.querySelector("button.add").click();
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

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"cart","tag":"dev","data":{"cart":[2]},"serializedGlobals":{"data":true}}}`
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
  <nav
    class="tags"
  >
    <b
      data-tag="all"
    >
      ALL
    </b>
    <b
      class="on"
      data-tag="dev"
    >
      DEV
    </b>
    <b
      data-tag="news"
    >
      NEWS
    </b>
  </nav>
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
INSERT: section > :is(.tags, .cart, .total)
REMOVE: section > img
REMOVE: section > h2
REMOVE: section > div
REMOVE: section > button
REMOVE: section > ul
INSERT: .tags > :is(b, .on, b)
```

# Update
```js
assert.equal(document.querySelectorAll("ul.cart li").length, 1);
assert.equal(
  document.querySelector("p.total")?.textContent,
  "total $200.5",
);
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
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <nav
    class="tags"
  >
    <b
      data-tag="all"
    >
      ALL
    </b>
    <b
      class="on"
      data-tag="dev"
    >
      DEV
    </b>
    <b
      data-tag="news"
    >
      NEWS
    </b>
  </nav>
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
