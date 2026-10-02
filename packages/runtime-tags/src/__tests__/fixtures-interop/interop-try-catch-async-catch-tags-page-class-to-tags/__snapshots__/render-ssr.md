# Render

# Update
```html
<div
  id="slow"
>
  slow
</div>
<div
  id="class"
>
  <div
    id="caught"
  >
    CAUGHT
  </div>
</div>
```
## Change
```
INSERT: #slow
INSERT: #slow::text("slow")
INSERT: #class
INSERT: #caught::text("CAUGHT")
INSERT: #class > #caught
```
