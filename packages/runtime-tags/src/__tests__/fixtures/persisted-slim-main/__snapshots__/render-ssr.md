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
document.querySelector("button.count").click();
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
INSERT: .count + :is(.items, .pagination)
REMOVE: .pagination + .items
REMOVE: .pagination + .pagination
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
