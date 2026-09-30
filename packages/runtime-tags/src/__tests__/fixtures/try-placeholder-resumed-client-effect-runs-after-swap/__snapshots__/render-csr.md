# Render
```html
<button
  id="show"
>
  show
</button>
```

# Update `click("#show")`
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

# Update `click("#inner")`
## Console
```
LOG "inner clicked"
```
