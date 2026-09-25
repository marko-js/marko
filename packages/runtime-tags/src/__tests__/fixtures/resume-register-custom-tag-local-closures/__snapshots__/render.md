# Render
```html
<button
  id="toggle"
>
  toggle
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
  id="toggle"
>
  toggle
</button>
item 0
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
INSERT: #toggle + :is(::text("item "), ::text("0"))
UPDATE: ::text@5 "" => "0"
```
