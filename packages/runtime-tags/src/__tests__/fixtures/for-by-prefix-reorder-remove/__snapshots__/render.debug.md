# Render
```html
<ul>
  <li>
    1
  </li>
  <li>
    2
  </li>
  <li>
    3
  </li>
  <li>
    4
  </li>
  <li>
    5
  </li>
</ul>
<button
  class="reorder"
>
  stable prefix, drop tail, swap
</button>
<button
  class="front"
>
  reorder from front and shrink
</button>
<button
  class="append"
>
  append
</button>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<ul>
  <li>
    1
  </li>
  <li>
    2
  </li>
  <li>
    4
  </li>
  <li>
    3
  </li>
</ul>
<button
  class="reorder"
>
  stable prefix, drop tail, swap
</button>
<button
  class="front"
>
  reorder from front and shrink
</button>
<button
  class="append"
>
  append
</button>
```
## Change
```
REMOVE: ul > li:nth-of-type(3) + li
REMOVE: ul > li:nth-of-type(4) + li
INSERT: ul > li:nth-of-type(2) + li
```

# Update
```js
document.querySelector(selector).click();
```
```html
<ul>
  <li>
    2
  </li>
  <li>
    1
  </li>
</ul>
<button
  class="reorder"
>
  stable prefix, drop tail, swap
</button>
<button
  class="front"
>
  reorder from front and shrink
</button>
<button
  class="append"
>
  append
</button>
```
## Change
```
REMOVE: ul > li:nth-of-type(1) + li
REMOVE: ul > li:nth-of-type(1) + li
REMOVE: ul > li:nth-of-type(2) + li
INSERT: ul > li
```

# Update
```js
document.querySelector(selector).click();
```
```html
<ul>
  <li>
    2
  </li>
  <li>
    1
  </li>
  <li>
    9
  </li>
</ul>
<button
  class="reorder"
>
  stable prefix, drop tail, swap
</button>
<button
  class="front"
>
  reorder from front and shrink
</button>
<button
  class="append"
>
  append
</button>
```
## Change
```
INSERT: ul > li:nth-of-type(2) + li
```
