# Render `{"tag":"b","label":"a"}`
```html
<b
  title="a"
/>
<b
  title="a"
/>
```

# Update `{"tag":"i","label":"b"}`
```html
<b
  title="b"
/>
<b
  title="b"
/>
```
## Change
```
UPDATE: b:nth-of-type(1)[title] "a" => "b"
UPDATE: b:nth-of-type(2)[title] "a" => "b"
```
