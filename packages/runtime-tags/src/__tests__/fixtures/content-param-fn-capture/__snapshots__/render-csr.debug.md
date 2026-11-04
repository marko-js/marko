# Render `{"v":"a"}`
```html
<output>
  a
</output>
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

# Update `{"v":"b"}`
