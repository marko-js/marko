# Render `{"tag":"b","label":"a"}`
```html
<b
  title="a"
/>
<p>
  b
</p>
```

# Update `{"tag":"i","label":"b"}`
```html
<b
  title="b"
/>
<p>
  b
</p>
```
## Change
```
UPDATE: b[title] "a" => "b"
```
