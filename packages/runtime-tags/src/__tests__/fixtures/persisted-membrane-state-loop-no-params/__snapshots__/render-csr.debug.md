# Render `{"$global":{"persisted":true}}`
```html
<button
  class="add"
>
  add
</button>
<ul
  class="rows"
>
  <li>
    row
  </li>
  <li>
    row
  </li>
</ul>
```

# Update
```js
document.querySelector("button.add").click();
```
```html
<button
  class="add"
>
  add
</button>
<ul
  class="rows"
>
  <li>
    row
  </li>
  <li>
    row
  </li>
  <li>
    row
  </li>
</ul>
```
## Change
```
INSERT: .rows > li:nth-of-type(2) + li
```

# Update
```js
_strict.default.equal(rowCount(document), 3);
```

# Update `{"$global":{"persisted":true}}`

# Update `{"$global":{"persisted":true}}`

# Update
```js
_strict.default.equal(rowCount(document), 3);
```

# Update
```js
document.querySelector("button.add").click();
```
```html
<button
  class="add"
>
  add
</button>
<ul
  class="rows"
>
  <li>
    row
  </li>
  <li>
    row
  </li>
  <li>
    row
  </li>
  <li>
    row
  </li>
</ul>
```
## Change
```
INSERT: .rows > li:nth-of-type(3) + li
```

# Update
```js
_strict.default.equal(rowCount(document), 4);
```
