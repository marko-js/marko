# Render

# Update
```html
<input
  value="X"
/>
<input
  value="X"
/>
<span>
  got: X
</span>
```
## Change
```
INSERT: input, input, span
UPDATE: input:nth-of-type(1)[value] null => "X"
UPDATE: input:nth-of-type(2)[value] null => "X"
UPDATE: span::text@5 "" => "X"
```
