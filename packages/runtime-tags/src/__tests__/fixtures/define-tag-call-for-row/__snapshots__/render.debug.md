# Render
```html
<ul>
  <li>
    1
  </li>
  <li>
    2
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
    1
  </li>
  <li>
    2
  </li>
  <li>
    3
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
    2
  </li>
  <li>
    3
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
UPDATE: ul > li:nth-of-type(1)::text "1" => "2"
UPDATE: ul > li:nth-of-type(2)::text "2" => "3"
```
