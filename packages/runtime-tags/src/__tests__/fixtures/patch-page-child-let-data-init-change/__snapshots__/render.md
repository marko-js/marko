# Render `{"n":1,"more":false}`

# Update `{"n":1,"more":true}`
```html
<p>
  1
</p>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "1"
```

# Update `{"n":1,"more":false}`
## Change
```
REMOVE: p
```

# Update `{"n":2,"more":true}`
```html
<p>
  1
</p>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "1"
```
