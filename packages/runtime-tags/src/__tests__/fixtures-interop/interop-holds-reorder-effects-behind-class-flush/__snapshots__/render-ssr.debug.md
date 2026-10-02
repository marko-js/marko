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
INSERT: #class
INSERT: #class > span
INSERT: #class > span::text("child")
REMOVE: ::text("loading")
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
INSERT: #class + #slow
INSERT: #slow::text("slow")
```
## Console
```
LOG "catch effect"
```
