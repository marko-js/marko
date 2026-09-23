# Render `{"secret":"s3cret"}`
```html
<button
  id="toggle"
>
  toggle
</button>
A
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
```
## Change
```
REMOVE: #toggle + ::text("A")
```
