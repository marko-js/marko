# Render
```html
<div
  id="class"
>
  0
</div>
```

# Update
```html
<div
  id="class"
>
  0
</div>
<div
  id="tags"
>
  hi
</div>
<div
  id="class-await"
>
  hi
</div>
```
## Change
```
INSERT: #class + #tags
INSERT: #tags::text("hi")
INSERT: #tags + #class-await
INSERT: #class-await::text("hi")
```
