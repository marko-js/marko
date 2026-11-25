# Render
```html
loading
```

# Update
```html
<div
  id="class"
>
  <span>
    child
  </span>
</div>
```
## Change
```
REMOVE: ::text("loading")
INSERT: #class
INSERT: #class > span
INSERT: #class > span::text("child")
```

# Update
```html
<div
  id="class"
>
  <span>
    child
  </span>
</div>
<div
  id="slow"
>
  slow
</div>
```
## Change
```
INSERT: #slow
INSERT: #slow::text("slow")
```
## Console
```
LOG "catch effect"
```
