# Render `{"show":true,"promise":{"value":"hi"}}`
```html
<span>
  function
</span>
```

# Update
```html
<span>
  function
</span>
<em>
  hi
</em>
```
## Change
```
INSERT: span + em
UPDATE: em::text " " => "hi"
```

# Update `{"show":true,"promise":{"value":"ho"}}`

# Update
```html
<span>
  function
</span>
```
## Change
```
REMOVE: span + em
```

# Update
```html
<span>
  function
</span>
<em>
  ho
</em>
```
## Change
```
INSERT: span + em
```
