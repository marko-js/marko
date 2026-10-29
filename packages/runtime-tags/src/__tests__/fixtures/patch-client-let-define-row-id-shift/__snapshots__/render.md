# Render `{"label":"a","more":false,"n":1,"items":["x"]}`
```html
<p>
  xa
</p>
```

# Update `{"label":"b","more":true,"n":2,"items":["z","x"]}`
```html
<p>
  zb
</p>
<p>
  xb
</p>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "xa" => "xb"
INSERT: p
```

# Update `{"label":"c","more":false,"n":3,"items":["x"]}`
```html
<p>
  xc
</p>
```
## Change
```
UPDATE: p::text "xb" => "xc"
REMOVE: p
```
