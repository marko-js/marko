# Render `{"msg":"a"}`
```html
<p>
  a
</p>
```

# Update `{"fail":true,"msg":"b"}`
```html
<span>
  inner
</span>
```
## Change
```
INSERT: span
REMOVE: span + p
```
## Console
```
LOG "inner setup"
LOG "catch" "b"
```
