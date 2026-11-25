# Render
```html
<button
  id="show"
>
  show
</button>
```

# Update
```js
document.querySelector("#show").click();
```
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
```
## Change
```
INSERT: #inner
```

# Update
```html
<button
  id="show"
>
  show
</button>
loading
```
## Change
```
REMOVE: #inner
INSERT: ::text("loading")
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
```

# Update
```js
document.querySelector("#inner").click();
```
## Console
```
LOG "inner clicked"
```
