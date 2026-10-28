# Render `{"show":false}`

# Update `{"show":true}`
```html
<span>
  a
</span>
<span>
  b
</span>
<p>
  last
</p>
```
## Change
```
INSERT: span, span, p
```

# Update `{"show":false}`
## Change
```
REMOVE: span
REMOVE: span
REMOVE: p
```

# Update `{"show":true}`
```html
<span>
  a
</span>
<span>
  b
</span>
<p>
  last
</p>
```
## Change
```
INSERT: span, span, p
```
