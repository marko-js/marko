# Render `{"x":"a"}`
```html
<b>
  a
</b>
<b>
  a
</b>
<b>
  a
</b>
```

# Update `{"x":"b"}`
```html
<b>
  b
</b>
<b>
  b
</b>
<b>
  b
</b>
```
## Change
```
UPDATE: b:nth-of-type(1)::text "a" => "b"
UPDATE: b:nth-of-type(2)::text "a" => "b"
UPDATE: b:nth-of-type(3)::text "a" => "b"
```
