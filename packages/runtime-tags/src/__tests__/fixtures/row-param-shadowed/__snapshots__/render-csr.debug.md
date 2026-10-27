# Render `{"items":[{"v":"a"}]}`
```html
<output>
  a!
</output>
```
## Console
```
LOG "run" "a!"
```

# Update `{"items":[{"v":"b"}]}`
```html
<output>
  b!
</output>
```
## Change
```
REMOVE: output::text("a!")
INSERT: output::text("b!")
```
## Console
```
LOG "run" "b!"
```

# Update `{"items":[{"v":"b"}]}`
