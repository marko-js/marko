# Render `{"v":{"title":"a"}}`
```html
<output>
  a
</output>
```
## Console
```
LOG "run" "a"
```

# Update `{"v":{"title":"b"}}`
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

# Update `{"v":{"title":"b"}}`
