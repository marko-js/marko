# Render

# Update
```html
<div
  id="ref"
>
  0
</div>
```
## Change
```
INSERT: #ref
```

# Update
```html
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
