# Render
```html
<div
  id="t"
>
  object
</div>
```

# Update
```html
<span
  id="child"
>
  1
</span>
<span
  id="child"
>
  2
</span>
<div
  id="t"
>
  object
</div>
```
## Change
```
INSERT: #child
INSERT: #child::text("1")
INSERT: #child + #child
INSERT: #child::text("2")
```
