# Render
```html
<button
  class="bad"
>
  bad
</button>
<button
  class="next"
>
  next
</button>
<ul>
  <li>
    head
  </li>
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
```

# Update
```js
document.querySelector(selector).click();
```
## Error
```
row params
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="bad"
>
  bad
</button>
<button
  class="next"
>
  next
</button>
<ul>
  <li>
    head
  </li>
  <li>
    7
  </li>
</ul>
```
## Change
```
REMOVE: ul > li
REMOVE: ul > li
REMOVE: ul > li
INSERT: ul > li:nth-of-type(2)
```
