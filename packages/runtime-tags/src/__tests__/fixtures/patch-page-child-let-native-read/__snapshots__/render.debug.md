# Render `{"tag":"b","label":"a","more":false}`
```html
<b
  title="b"
>
  b:a
</b>
```

# Update `{"tag":"b","label":"b","more":true}`
```html
<b
  title="b"
>
  b:b
</b>
<p>
  b
</p>
```
## Change
```
INSERT: b + p
UPDATE: b::text@2 "a" => "b"
UPDATE: p::text " " => "b"
```

# Update `{"tag":"i","label":"c","more":true}`
```html
<b
  title="b"
>
  b:c
</b>
<p>
  b
</p>
```
## Change
```
UPDATE: b::text@2 "b" => "c"
```
