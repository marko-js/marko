# Render `{"label":"a","items":["x"]}`
```html
<em>
  xa
</em>
```

# Update `{"label":"b","items":["z","x"]}`
```html
<em>
  zb
</em>
<em>
  xb
</em>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "xa" => "zb"
INSERT: em:nth-of-type(1) + em
UPDATE: em:nth-of-type(2)::text " " => "xb"
```

# Update `{"label":"c","items":["x"]}`
```html
<em>
  xc
</em>
```
## Change
```
REMOVE: em + em
UPDATE: em::text "zb" => "xc"
```
