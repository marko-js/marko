# Render `{"items":[{"id":1,"label":"a"}]}`
```html
<output>
  a
</output>
```
## Console
```
LOG "run" "a"
```

# Update `{"items":[{"id":1,"label":"b"}]}`
```html
<output>
  b
</output>
```
## Change
```
REMOVE: output::text("a")
INSERT: output::text("b")
```
## Console
```
LOG "run" "b"
```

# Update `{"items":[{"id":1,"label":"b"}]}`
