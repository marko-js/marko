# Render `{"show":true,"label":"a","items":["x"],"cls":"c"}`
```html
<span>
  static
</span>
<p>
  a
</p>
```

# Update `{"show":false,"label":"b","items":["y","z"],"cls":"d"}`
```html
<span>
  static
</span>
<p>
  b
</p>
```
## Change
```
UPDATE: p::text "a" => "b"
```
