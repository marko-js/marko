# Render `{"$global":{"persisted":true}}`
```html
<button
  class="add"
>
  add
</button>
<ul
  class="items"
>
  <li>
    a
  </li>
  <li>
    b
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
  class="items"
>
  <li>
    a
  </li>
  <li>
    b
  </li>
  <li>
    c2
  </li>
</ul>
```
## Change
```
INSERT: .items > li:nth-of-type(2) + li
```

# Update
```js
assert.deepEqual(rows(document), ["a", "b", "c2"]);
```

# Update `{"$global":{"persisted":true}}`

# Update
```js
assert.deepEqual(rows(document), ["a", "b", "c2"]);
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
  class="items"
>
  <li>
    a
  </li>
  <li>
    b
  </li>
  <li>
    c2
  </li>
  <li>
    c3
  </li>
</ul>
```
## Change
```
INSERT: .items > li:nth-of-type(3) + li
```

# Update
```js
assert.deepEqual(rows(document), ["a", "b", "c2", "c3"]);
```
