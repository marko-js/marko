# Render
```html
<h1>
  spread body
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
  spread body
</h1>
<button
  id="toggle"
>
  toggle
</button>
spread body
```
## Change
```
INSERT: #toggle + ::text("spread body")
```
