# Render `{"items":["a","b","c"],"selected":0,"wrap":"em"}`
```html
<b>
  a
</b>
<em>
  a
</em>
```

# Update `{"items":["a","b","c"],"selected":1,"wrap":"em"}`
```html
<b>
  b
</b>
<em>
  b
</em>
```
## Change
```
REMOVE: b
REMOVE: em
INSERT: b
INSERT: b + em
```

# Update `{"items":["a","b","c"],"selected":2,"wrap":"em"}`
```html
<b>
  c
</b>
<em>
  c
</em>
```
## Change
```
REMOVE: b
REMOVE: em
INSERT: b
INSERT: b + em
```

# Update `{"items":["a","b","d"],"selected":2,"wrap":"em"}`
```html
<b>
  d
</b>
<em>
  d
</em>
```
## Change
```
UPDATE: b::text "c" => "d"
UPDATE: em::text "c" => "d"
```
