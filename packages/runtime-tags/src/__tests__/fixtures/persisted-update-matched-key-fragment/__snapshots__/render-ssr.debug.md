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
REMOVE: .items > li
REMOVE: .items > li
INSERT: .items > li
INSERT: .items > li:nth-of-type(1) + li
INSERT: .items > li:nth-of-type(2) + li
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
REMOVE: .items > li:nth-of-type(2) + li
```

# Update
```js
container.querySelector("button.count").click();
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
