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
INSERT: span
INSERT: span:nth-of-type(1) + span
INSERT: span:nth-of-type(2) + p
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
INSERT: span
INSERT: span:nth-of-type(1) + span
INSERT: span:nth-of-type(2) + p
```
