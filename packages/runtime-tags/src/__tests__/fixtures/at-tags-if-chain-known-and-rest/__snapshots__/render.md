# Render
```html
<button
  id="toggle"
>
  toggle
</button>
A
<p>
  other
</p>
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
<p>
  other
</p>
```
## Change
```
REMOVE: #toggle + ::text("A")
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
A
<p>
  other
</p>
```
## Change
```
INSERT: #toggle + ::text("A")
```
