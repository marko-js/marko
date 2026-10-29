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
INSERT: p, em, i
UPDATE: p::text " " => "1"
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
INSERT: p, em, i
UPDATE: p::text " " => "1"
```
