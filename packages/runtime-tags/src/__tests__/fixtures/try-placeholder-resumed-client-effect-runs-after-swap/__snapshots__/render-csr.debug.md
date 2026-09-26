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
INSERT: #show + #inner
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
INSERT: #show + ::text("loading")
REMOVE: ::text + #inner
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
INSERT: #show + :is(#inner, div)
REMOVE: div + ::text("loading")
```

# Update
```js
document.querySelector("#inner").click();
```
## Console
```
LOG "inner clicked"
```
