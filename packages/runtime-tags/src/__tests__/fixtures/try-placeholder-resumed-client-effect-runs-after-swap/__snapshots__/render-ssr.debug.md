# Render
```html
<button
  id="show"
>
  show
</button>
loading
```

# Update
```js
document.querySelector("#show").click();
```

# Update
```html
<button
  id="show"
>
  show
</button>
<button
  id="inner"
>
  inner
</button>
<div>
  server
</div>
```
## Change
```
REMOVE: ::text("loading")
INSERT: #inner, div
INSERT: div::text("server")
```

# Update
```js
document.querySelector("#inner").click();
```
## Console
```
LOG "inner clicked"
```
