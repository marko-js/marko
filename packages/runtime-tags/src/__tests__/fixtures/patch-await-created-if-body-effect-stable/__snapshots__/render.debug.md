# Render `{"show":true}`
```html
<div>
  1
</div>
```
## Console
```
LOG "await" 1
```

# Update `{"show":false}`
## Change
```
REMOVE: div
```

# Update `{"show":true}`
```html
<div>
  1
</div>
```
## Change
```
INSERT: div
INSERT: div::text("1")
```
## Console
```
LOG "await" 1
```
