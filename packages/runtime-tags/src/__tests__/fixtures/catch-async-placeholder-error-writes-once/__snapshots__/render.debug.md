# Render
```html
caught An @placeholder cannot contain async content.
<div
  id="ref"
>
  0
</div>
```

# Update
```html
caught An @placeholder cannot contain async content.
<div
  id="ref"
>
  hello
</div>
```
## Change
```
REMOVE: #ref::text("0")
INSERT: #ref::text("hello")
```
