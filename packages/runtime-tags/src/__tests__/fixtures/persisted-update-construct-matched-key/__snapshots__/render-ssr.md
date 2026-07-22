# Render `{"$global":{"persisted":true,"range":"narrow"}}`
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
</ul>
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
</ul>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"range":"wide"}}`
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
</ul>
```
## Change
```
INSERT: .items > :is(li, li, li)
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
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
    alpha
  </li>
  <li>
    beta
  </li>
  <li>
    gamma
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update `{"$global":{"persisted":true,"range":"narrow"}}`
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
    alpha
  </li>
  <li>
    beta
  </li>
</ul>
```
## Change
```
INSERT: .items > :is(li, li)
REMOVE: .items > li:nth-of-type(2) + li
REMOVE: .items > li:nth-of-type(2) + li
REMOVE: .items > li:nth-of-type(2) + li
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 3
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
</ul>
```
## Change
```
UPDATE: .count::text@8 "2" => "3"
```
