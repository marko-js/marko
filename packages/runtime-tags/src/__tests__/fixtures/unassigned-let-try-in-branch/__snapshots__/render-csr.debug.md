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
<p>
  loading
</p>
```
## Change
```
INSERT: span + p
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
REMOVE: em + p
```

# Update `{"show":true,"promise":{"value":"ho"}}`

# Update
```html
<span>
  function
</span>
<p>
  loading
</p>
```
## Change
```
INSERT: span + p
REMOVE: p + em
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
REMOVE: em + p
```
