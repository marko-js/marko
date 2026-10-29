# Render `{"show":true,"v":"a","w":"1","items":["a","b"]}`
```html
<button>
  0
</button>
<p>
  a1
</p>
```

# Update `{"show":false,"v":"b","w":"2","items":["c"]}`
```html
<button>
  0
</button>
<p>
  b2
</p>
```
## Change
```
UPDATE: p::text "a1" => "b2"
```

# Update `{"show":true,"v":"c","w":"3","items":["d","e"]}`
```html
<button>
  0
</button>
<p>
  c3
</p>
```
## Change
```
UPDATE: p::text "b2" => "c3"
```
