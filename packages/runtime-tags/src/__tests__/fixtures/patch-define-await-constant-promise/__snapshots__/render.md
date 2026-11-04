# Render `{"show":false}`
```html
<span>
  x
</span>
```

# Update `{"show":true}`
```html
<span>
  x
</span>
<span>
  x
</span>
```
## Change
```
INSERT: span:nth-of-type(1) + span
```
