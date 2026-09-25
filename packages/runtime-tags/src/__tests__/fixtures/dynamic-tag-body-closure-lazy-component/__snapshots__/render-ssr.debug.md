# Render
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

# Update
```js
document.querySelector("#inc").click();
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
INSERT: #toggle + :is(::text("depth "), ::text("1"))
UPDATE: ::text@6 "" => "1"
```
