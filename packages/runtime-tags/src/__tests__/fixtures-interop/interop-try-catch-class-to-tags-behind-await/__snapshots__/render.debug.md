# Render

# Update
```html
<div
  id="slow"
>
  slow
</div>
<div
  id="caught"
>
  caught
</div>
```
## Change
```
INSERT: #slow
INSERT: #slow::text("slow")
INSERT: #slow + #caught
INSERT: #caught::text("caught")
```
