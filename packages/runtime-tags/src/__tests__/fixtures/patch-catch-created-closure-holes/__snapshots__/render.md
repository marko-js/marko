# Render `{"msg":"a"}`
```html
<p>
  a
</p>
```

# Update `{"fail":true,"msg":"b"}`
```html
<b
  title="b"
>
  b b B bB
</b>
```
## Change
```
INSERT: b
REMOVE: b + p
UPDATE: b::text@0 "" => "b"
UPDATE: b::text@6 "" => "bB"
UPDATE: b[title] null => "b"
UPDATE: b::text@2 "" => "b"
UPDATE: b::text@4 "" => "B"
```
