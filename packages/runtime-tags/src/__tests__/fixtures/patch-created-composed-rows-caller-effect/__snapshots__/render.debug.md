# Render `{"items":[]}`

# Update `{"items":[{"name":"a"},{"name":"b"}]}`
```html
<p>
  probe
</p>
<p>
  probe
</p>
```
## Change
```
INSERT: p
INSERT: p:nth-of-type(1) + p
```
## Console
```
LOG "probe" "a"
LOG "probe" "b"
```

# Update `{"items":[{"name":"a"},{"name":"B"}]}`
## Console
```
LOG "probe" "B"
```
