# Render
```html
<h1>
  define body: registered
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
  define body: registered
</h1>
<button
  id="toggle"
>
  toggle
</button>
define body: registered
```
## Change
```
INSERT: #toggle + ::text("define body: registered")
```
