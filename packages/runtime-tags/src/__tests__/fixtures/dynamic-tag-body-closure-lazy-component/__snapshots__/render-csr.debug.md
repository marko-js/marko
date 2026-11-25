# Render
```html
<button
  id="inc"
>
  inc
</button>
```

# Update
```js
document.querySelector("#inc").click();
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
INSERT: #toggle
```

# Update
```js
document.querySelector("#toggle")?.click();
```
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="toggle"
>
  toggle
</button>
depth 1
```
## Change
```
INSERT: ::text("depth "), ::text("1")
UPDATE: ::text@6 "" => "1"
```
