# Render `{"show":false,"v":"a"}`
```html
<span>
  function
</span>
```

# Update `{"show":true,"v":"a"}`
```html
<span>
  function
</span>
<p>
  a
</p>
```
## Change
```
INSERT: span + p
UPDATE: p::text " " => "a"
```

# Update `{"show":false,"v":"a"}`
```html
<span>
  function
</span>
```
## Change
```
REMOVE: span + p
```

# Update `{"show":true,"v":"a"}`
```html
<span>
  function
</span>
<p>
  a
</p>
```
## Change
```
INSERT: span + p
UPDATE: p::text " " => "a"
```
