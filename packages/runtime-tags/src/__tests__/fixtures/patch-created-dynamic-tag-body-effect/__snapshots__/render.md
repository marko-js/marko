# Render `{"tag":"div"}`
```html
<div>
   body
</div>
```
## Console
```
LOG "body setup"
```

# Update `{"tag":null}`
```html
body
```
## Change
```
INSERT: ::text(" body")
REMOVE: ::text + div
```
## Console
```
LOG "body setup"
```

# Update `{"tag":"section"}`
```html
<section>
   body
</section>
```
## Change
```
INSERT: section
REMOVE: section + ::text(" body")
```
## Console
```
LOG "body setup"
```

# Update `{"tag":"section"}`
