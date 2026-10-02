# Render

# Update
```html
<div
  id="page-caught"
>
  page caught
</div>
<div
  id="class"
>
  <div
    id="tags"
  >
    tags
  </div>
</div>
```
## Change
```
INSERT: #page-caught
INSERT: #page-caught::text("page caught")
INSERT: #class
INSERT: #class > #tags
INSERT: #tags::text("tags")
```
