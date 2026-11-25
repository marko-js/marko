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
INSERT: input:nth-of-type(1)
INSERT: input:nth-of-type(2)
INSERT: span
INSERT: span::text("got: X")
```
