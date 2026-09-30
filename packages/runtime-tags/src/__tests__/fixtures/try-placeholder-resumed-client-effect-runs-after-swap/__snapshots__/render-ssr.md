# Render
```html
<button
  id="show"
>
  show
</button>
loading
```

# Update `click("#show")`

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

# Update `click("#inner")`
## Console
```
LOG "inner clicked"
```
