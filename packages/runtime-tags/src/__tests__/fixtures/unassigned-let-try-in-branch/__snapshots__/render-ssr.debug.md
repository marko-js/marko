# Render `{"show":true,"promise":{"value":"hi"}}`
```html
<span>
  function
</span>
<p>
  loading
</p>
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
INSERT: em::text("hi")
REMOVE: p
INSERT: span + em
```
