# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  f:b
</button>
<button>
  f:b
</button>
```
## Change
```
INSERT: button
INSERT: button:nth-of-type(1) + button
```
