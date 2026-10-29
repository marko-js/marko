# Render `{"show":false,"v":"a","w":"1"}`

# Update `{"show":true,"v":"a","w":"2"}`
```html
<button>
  set
</button>
<p>
  a2
</p>
```
## Change
```
INSERT: button, p
UPDATE: p::text " " => "a2"
```

# Update `{"show":true,"v":"a","w":"3"}`
```html
<button>
  set
</button>
<p>
  a3
</p>
```
## Change
```
UPDATE: p::text "a2" => "a3"
```

# Update `{"show":false,"v":"b","w":"4"}`
## Change
```
REMOVE: button
REMOVE: p
```

# Update `{"show":true,"v":"b","w":"5"}`
```html
<button>
  set
</button>
<p>
  b5
</p>
```
## Change
```
INSERT: button, p
UPDATE: p::text " " => "b5"
```
