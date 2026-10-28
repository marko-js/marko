# Render `{"v":"a"}`
```html
<output>
  a
</output>
```
## Console
```
LOG "run" "a"
```

# Update `{"v":"b"}`
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

# Update `{"v":"b"}`
