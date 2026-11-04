# Render `{"show":false,"text":"x"}`

# Update `{"show":true,"text":"y"}`
```html
<input
  value="y"
/>
<input
  value="y"
/>
```
## Change
```
INSERT: input
INSERT: input:nth-of-type(1) + input
UPDATE: input:nth-of-type(1)[value] null => "y"
UPDATE: input:nth-of-type(2)[value] null => "y"
```
