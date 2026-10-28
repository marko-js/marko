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
UPDATE: button:nth-of-type(1)::text " " => "f:b"
INSERT: button:nth-of-type(1) + button
UPDATE: button:nth-of-type(2)::text " " => "f:b"
```
