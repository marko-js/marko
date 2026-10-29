# Render `{"more":false,"label":"a"}`

# Update `{"more":true,"label":"b"}`
```html
<p>
  1
</p>
<em>
  b
</em>
<i>
  w-b
</i>
```
## Change
```
INSERT: p, i
UPDATE: p::text " " => "1"
INSERT: p + em
UPDATE: em::text " " => "b"
UPDATE: i::text " " => "w-b"
```

# Update `{"more":false,"label":"c"}`
## Change
```
REMOVE: p
REMOVE: em
REMOVE: i
```

# Update `{"more":true,"label":"d"}`
```html
<p>
  1
</p>
<em>
  d
</em>
<i>
  w-d
</i>
```
## Change
```
INSERT: p, i
UPDATE: p::text " " => "1"
INSERT: p + em
UPDATE: em::text " " => "d"
UPDATE: i::text " " => "w-d"
```
