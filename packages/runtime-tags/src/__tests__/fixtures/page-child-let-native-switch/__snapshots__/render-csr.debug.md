# Render `{"tag":"b","label":"a"}`
```html
<b
  title="a"
>
  a
</b>
```

# Update `{"tag":"i","label":"b"}`
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

# Update `{"tag":"i","label":"c"}`
```html
<b
  title="c"
>
  c
</b>
```
## Change
```
UPDATE: b[title] "b" => "c"
UPDATE: b::text "b" => "c"
```
