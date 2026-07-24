# Render
```html
<button
  id="inc"
>
  inc
</button>
<ul>
  <li>
    item 0 of 1
  </li>
</ul>
```

# Update
```js
document.querySelector(`#${id}`).click();
```

# Update
```js
document.querySelector(`#${id}`).click();
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<ul>
  <li>
    item 0 of 1
  </li>
</ul>
<div
  id="awaited"
>
  awaited 1
</div>
```
## Change
```
INSERT: ul + #awaited
INSERT: #awaited::text("awaited ")
INSERT: #awaited::text@0 + ::text("1")
```
