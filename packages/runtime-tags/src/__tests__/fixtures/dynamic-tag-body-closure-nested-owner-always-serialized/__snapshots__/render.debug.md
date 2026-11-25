# Render
```html
<button
  id="inc"
>
  0
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="inc"
>
  0
</button>
<button
  id="toggle"
>
  toggle
</button>
depth 0
```
## Change
```
INSERT: ::text("depth "), ::text("0")
UPDATE: ::text@6 "" => "0"
```
