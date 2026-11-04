# Render `{"$global":{"o":{"x":"a","y":1},"serializedGlobals":["o"]}}`
```html
<button
  class="dec"
>
  -
</button>
<button
  class="inc"
>
  +
</button>
<ul />
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="dec"
>
  -
</button>
<button
  class="inc"
>
  +
</button>
<ul>
  <li>
    0:a
  </li>
</ul>
```
## Change
```
INSERT: ul > li
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="dec"
>
  -
</button>
<button
  class="inc"
>
  +
</button>
<ul>
  <li>
    0:a
  </li>
  <li>
    1:a
  </li>
</ul>
```
## Change
```
INSERT: ul > li:nth-of-type(1) + li
```

# Update `{"$global":{"o":{"x":"b","y":1},"serializedGlobals":["o"]}}`
```html
<button
  class="dec"
>
  -
</button>
<button
  class="inc"
>
  +
</button>
<ul>
  <li>
    0:b
  </li>
  <li>
    1:b
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@2 "a" => "b"
UPDATE: ul > li:nth-of-type(2)::text@2 "a" => "b"
```

# Update `{"$global":{"o":{"x":"b","y":2},"serializedGlobals":["o"]}}`

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="dec"
>
  -
</button>
<button
  class="inc"
>
  +
</button>
<ul>
  <li>
    0:b
  </li>
</ul>
```
## Change
```
REMOVE: ul > li + li
```
