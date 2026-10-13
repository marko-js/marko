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
INSERT: input, input
UPDATE: input:nth-of-type(2)[value] null => "y"
```
