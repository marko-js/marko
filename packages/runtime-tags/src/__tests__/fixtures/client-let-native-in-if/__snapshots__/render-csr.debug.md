# Render `{"tag":"b","label":"a","more":true}`
```html
<b
  title="a"
>
  a
</b>
```

# Update `{"tag":"i","label":"b","more":true}`
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

# Update `{"tag":"i","label":"c","more":false}`
## Change
```
REMOVE: b
```

# Update `{"tag":"i","label":"d","more":true}`
```html
<b
  title="d"
>
  d
</b>
```
## Change
```
INSERT: b
UPDATE: b[title] null => "d"
UPDATE: b::text " " => "d"
```
