# Render
```html
<button
  id="inc"
>
  inc
</button>
<div
  id="even"
>
  even 0
</div>
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
<div
  id="even"
>
  even 0
</div>
<div
  id="awaited"
>
  awaited 0
</div>
```
## Change
```
INSERT: #even + #awaited
INSERT: #awaited::text("awaited ")
INSERT: #awaited::text@0 + ::text("0")
```
