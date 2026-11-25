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
INSERT: #tags
UPDATE: #tags::text " " => "hi"
INSERT: #class-await
INSERT: #class-await::text("hi")
```
