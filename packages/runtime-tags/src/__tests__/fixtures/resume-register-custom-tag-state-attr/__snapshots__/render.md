# Render
```html
<button
  id="toggle"
>
  toggle
</button>
<h1>
  state driven string: not registered
</h1>
<h3>
  static: not registered
</h3>
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
<h2>
  state driven string: not registered
</h2>
<h3>
  static: not registered
</h3>
```
## Change
```
INSERT: #toggle + h2
REMOVE: h2 + h1
INSERT: h2::text("state driven string: not registered")
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
<h1>
  state driven string: not registered
</h1>
<h3>
  static: not registered
</h3>
```
## Change
```
INSERT: #toggle + h1
REMOVE: h1 + h2
INSERT: h1::text("state driven string: not registered")
```
