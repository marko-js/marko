# Render `{"tag":"b","label":"a"}`
```html
<b
  title="a"
>
  a
</b>
```

# Update `{"tag":"","label":"b"}`
```html
<b
  title="b"
>
  b
</b>
```
## Change
```
UPDATE: b[title] "a" => "b"
UPDATE: b::text "a" => "b"
```
