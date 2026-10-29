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
INSERT: p
UPDATE: p:nth-of-type(2)::text "xa" => "xb"
UPDATE: p:nth-of-type(1)::text " " => "zb"
```

# Update `{"label":"c","more":false,"n":3,"items":["x"]}`
```html
<p>
  xc
</p>
```
## Change
```
REMOVE: p
UPDATE: p::text "xb" => "xc"
```
