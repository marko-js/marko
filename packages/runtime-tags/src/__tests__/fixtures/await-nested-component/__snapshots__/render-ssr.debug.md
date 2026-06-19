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
INSERT: input
INSERT: input:nth-of-type(1) + input
INSERT: input:nth-of-type(2) + span
INSERT: span::text("got: X")
```
