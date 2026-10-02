# Render
```html
<div
  id="class"
>
  class
</div>
```

# Update
```html
<div
  id="class"
>
  class
</div>
<div
  id="caught"
>
  CAUGHT
</div>
```
## Change
```
INSERT: #caught::text("CAUGHT")
INSERT: #class + #caught
```
