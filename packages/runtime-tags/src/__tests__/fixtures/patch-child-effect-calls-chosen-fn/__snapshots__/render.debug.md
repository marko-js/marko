# Render `{"title":"a"}`
```html
<output>
  la
</output>
```
## Console
```
LOG "run" "la"
```

# Update `{"title":"a","upper":true}`
```html
<output>
  Ua
</output>
```
## Change
```
REMOVE: output::text("la")
INSERT: output::text("Ua")
```
## Console
```
LOG "run" "Ua"
```

# Update `{"title":"b","upper":true}`
```html
<output>
  Ub
</output>
```
## Change
```
REMOVE: output::text("Ua")
INSERT: output::text("Ub")
```
## Console
```
LOG "run" "Ub"
```

# Update `{"title":"b","upper":true}`
