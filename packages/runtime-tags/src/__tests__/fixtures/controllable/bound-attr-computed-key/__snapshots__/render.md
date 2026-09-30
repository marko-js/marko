# Render
```html
<div>
  v=v1|wrong=
</div>
<input
  value="v1"
/>
```

# Update `type("input", "z")`
```html
<div>
  v=z|wrong=
</div>
<input
  default-value="v1"
  value="z"
/>
```
## Change
```
UPDATE: div::text@2 "v1" => "z"
```
