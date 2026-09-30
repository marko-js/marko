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
    caught
  </div>
</div>
```
## Change
```
INSERT: #slow
INSERT: #slow::text("slow")
INSERT: #slow + #class
INSERT: #class > #caught
INSERT: #caught::text("caught")
```
