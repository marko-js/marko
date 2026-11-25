# Render
```html
<ul>
  <li>
    a
  </li>
  <li>
    b
  </li>
</ul>
<button
  id="add"
>
  Add
</button>
<button
  id="remove"
>
  Remove
</button>
```

# Update
```js
document.querySelector("#add").click();
```
```html
<ul>
  <li>
    a
  </li>
  <li>
    b
  </li>
  <li>
    c
  </li>
</ul>
<button
  id="add"
>
  Add
</button>
<button
  id="remove"
>
  Remove
</button>
```
## Change
```
INSERT: ul > li:nth-of-type(3)
```

# Update
```js
document.querySelector("#remove").click();
```
```html
<ul>
  <li>
    b
  </li>
  <li>
    c
  </li>
</ul>
<button
  id="add"
>
  Add
</button>
<button
  id="remove"
>
  Remove
</button>
```
## Change
```
REMOVE: ul > li
UPDATE: ul > li:nth-of-type(1)::text "a" => "b"
UPDATE: ul > li:nth-of-type(2)::text "b" => "c"
```
