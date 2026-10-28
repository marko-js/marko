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
INSERT: em::text("hi")
```
