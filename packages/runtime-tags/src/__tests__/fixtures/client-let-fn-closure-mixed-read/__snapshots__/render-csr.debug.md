# Render `{"label":"a","more":false}`
```html
<p>
  f-a
</p>
```

# Update `{"label":"b","more":true}`
```html
<p>
  f-b
</p>
<p>
  f-constant
</p>
```
## Change
```
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(1)::text "f-a" => "f-b"
UPDATE: p:nth-of-type(2)::text " " => "f-constant"
```
