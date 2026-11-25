# Render

# Update
```html
<div
  id="first"
>
  first
</div>
```
## Change
```
INSERT: #first
INSERT: #first::text("first")
```

# Update
```html
<div
  id="first"
>
  first
</div>
<div
  id="slow"
>
  slow
</div>
<div
  id="caught"
>
  CAUGHT
</div>
```
## Change
```
INSERT: #slow
INSERT: #slow::text("slow")
INSERT: #caught
INSERT: #caught::text("CAUGHT")
```
