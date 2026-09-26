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
INSERT: div::text("server")
REMOVE: ::text("loading")
INSERT: #show + :is(#inner, div)
```

# Update
```js
document.querySelector("#inner").click();
```
## Console
```
LOG "inner clicked"
```
