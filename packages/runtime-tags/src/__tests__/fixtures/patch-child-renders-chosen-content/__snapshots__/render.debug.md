# Render `{"a":true,"label":"one"}`
```html
<em>
  one
</em>
```

# Update `{"a":true,"label":"two"}`
```html
<em>
  two
</em>
```
## Change
```
UPDATE: em::text "one" => "two"
```

# Update `{"a":false,"label":"three"}`
```html
<b>
  three
</b>
```
## Change
```
INSERT: b
REMOVE: b + em
UPDATE: b::text " " => "three"
```

# Update `{"a":true,"label":"four"}`
```html
<em>
  four
</em>
```
## Change
```
INSERT: em
REMOVE: em + b
UPDATE: em::text " " => "four"
```
