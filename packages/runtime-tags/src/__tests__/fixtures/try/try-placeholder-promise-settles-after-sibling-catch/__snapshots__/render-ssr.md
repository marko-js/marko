# Render
```html
<div
  id="ref"
>
  0
</div>
```

# Update
```html
<div
  id="ref"
>
  0
</div>
caught
```
## Change
```
INSERT: #ref + ::text("caught")
```

# Update
```html
<span>
  done
</span>
caught
```
## Change
```
INSERT: span::text("done")
REMOVE: #ref
INSERT: span
```
