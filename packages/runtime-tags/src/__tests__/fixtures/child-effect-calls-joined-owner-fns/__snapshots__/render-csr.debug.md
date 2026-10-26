# Render `{"title":"a"}`
```html
<output>
  Ua
</output>
```
## Console
```
LOG "run" "Ua"
```

# Update `{"title":"b"}`
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

# Update `{"title":"b"}`
