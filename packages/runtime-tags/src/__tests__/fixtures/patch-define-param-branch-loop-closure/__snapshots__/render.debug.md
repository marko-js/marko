# Render `{"open":true,"label":"a"}`
```html
<em>
  a1
</em>
<em>
  a2
</em>
```

# Update `{"open":true,"label":"b"}`
```html
<em>
  b1
</em>
<em>
  b2
</em>
```
## Change
```
UPDATE: em:nth-of-type(1)::text@0 "a" => "b"
UPDATE: em:nth-of-type(2)::text@0 "a" => "b"
```

# Update `{"open":false,"label":"c"}`
## Change
```
REMOVE: em
REMOVE: em
```

# Update `{"open":true,"label":"d"}`
```html
<em>
  d1
</em>
<em>
  d2
</em>
```
## Change
```
INSERT: em
INSERT: em:nth-of-type(1) + em
```
