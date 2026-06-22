# Render
```html
<div
  id="start"
>
  start
</div>
<div
  id="end"
>
  end
</div>
```

# Update
```html
<div
  id="start"
>
  start
</div>
loading
<div
  id="end"
>
  end
</div>
```
## Change
```
INSERT: #start + ::text("loading")
```

# Update
```html
<div
  id="start"
>
  start
</div>
<button
  id="a"
>
  v
</button>
<div
  id="end"
>
  end
</div>
```
## Change
```
INSERT: #start + #a
REMOVE: #a + ::text("loading")
```
