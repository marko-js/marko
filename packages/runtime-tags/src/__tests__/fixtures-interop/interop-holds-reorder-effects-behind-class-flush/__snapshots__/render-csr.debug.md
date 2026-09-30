# Render

# Update
```html
loading
```
## Change
```
INSERT: ::text("loading")
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
```
## Console
```
LOG "catch effect"
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
UPDATE: #slow::text " " => "slow"
```
