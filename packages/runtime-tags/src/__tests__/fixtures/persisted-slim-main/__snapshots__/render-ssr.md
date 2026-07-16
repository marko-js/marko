# Render `{"$global":{"persisted":true,"search":[{"page":2,"q":"a"}]}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li>
    alpha
  </li>
  <li>
    beta
  </li>
  <li>
    gamma
  </li>
  <li>
    delta
  </li>
</ul>
<nav
  class="pagination"
>
  <a
    href="/search?page=1&q=a"
  >
    1
  </a>
  <span
    class="current"
  >
    2
  </span>
  <a
    href="/search?page=3&q=a"
  >
    3
  </a>
</nav>
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
<ul
  class="items"
>
  <li>
    alpha
  </li>
  <li>
    beta
  </li>
  <li>
    gamma
  </li>
  <li>
    delta
  </li>
</ul>
<nav
  class="pagination"
>
  <a
    href="/search?page=1&q=a"
  >
    1
  </a>
  <span
    class="current"
  >
    2
  </span>
  <a
    href="/search?page=3&q=a"
  >
    3
  </a>
</nav>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"search":[{"page":3,"q":"e"}]}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<ul
  class="items"
>
  <li>
    beta
  </li>
  <li>
    delta
  </li>
</ul>
<nav
  class="pagination"
>
  <a
    href="/search?page=1&q=e"
  >
    1
  </a>
  <a
    href="/search?page=2&q=e"
  >
    2
  </a>
  <span
    class="current"
  >
    3
  </span>
</nav>
```
## Change
```
UPDATE: .items > li:nth-of-type(1)::text "alpha" => "beta"
UPDATE: .items > li:nth-of-type(2)::text "beta" => "delta"
REMOVE: .items > li:nth-of-type(2) + li
REMOVE: .items > li:nth-of-type(2) + li
UPDATE: .pagination > a:nth-of-type(1)[href] "/search?page=1&q=a" => "/search?page=1&q=e"
INSERT: .current + a
REMOVE: .pagination > a:nth-of-type(1) + .current
INSERT: .pagination > a:nth-of-type(2) + .current
REMOVE: .pagination > a:nth-of-type(2) + a
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
<ul
  class="items"
>
  <li>
    beta
  </li>
  <li>
    delta
  </li>
</ul>
<nav
  class="pagination"
>
  <a
    href="/search?page=1&q=e"
  >
    1
  </a>
  <a
    href="/search?page=2&q=e"
  >
    2
  </a>
  <span
    class="current"
  >
    3
  </span>
</nav>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```
