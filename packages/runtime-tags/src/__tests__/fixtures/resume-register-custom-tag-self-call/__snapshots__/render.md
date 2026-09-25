# Render
```html
<h1>
  self body
</h1>
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
<h1>
  self body
</h1>
<button
  id="toggle"
>
  toggle
</button>
self body
```
## Change
```
INSERT: #toggle + ::text("self body")
```
