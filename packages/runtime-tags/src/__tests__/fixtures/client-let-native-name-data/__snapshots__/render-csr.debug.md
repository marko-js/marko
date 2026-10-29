# Render `{"tag":"b","label":"a"}`
```html
<b
  title="b"
>
  b:a
</b>
```

# Update `{"tag":"i","label":"b"}`
```html
<b
  title="b"
>
  b:b
</b>
```
## Change
```
UPDATE: b::text@2 "a" => "b"
```
