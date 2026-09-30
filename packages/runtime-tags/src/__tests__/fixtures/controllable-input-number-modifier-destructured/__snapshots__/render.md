# Render
```html
<input
  type="number"
  value="0"
/>
<span>
  0 number
</span>
```

# Update `type("input", "1")`
```html
<input
  default-value="0"
  type="number"
  value="1"
/>
<span>
  1 number
</span>
```
## Change
```
UPDATE: span::text@0 "0" => "1"
```

# Update `type("input", "10")`
```html
<input
  default-value="0"
  type="number"
  value="10"
/>
<span>
  10 number
</span>
```
## Change
```
UPDATE: span::text@0 "1" => "10"
```
