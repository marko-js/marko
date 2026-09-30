# Render
```html
<input
  checked=""
  type="radio"
  value="0"
/>
<input
  type="radio"
  value="1"
/>
<input
  type="radio"
  value="2"
/>
<span>
  0
</span>
```

# Update `click("input", 1)`
```html
<input
  default-checked=""
  type="radio"
  value="0"
/>
<input
  checked=""
  type="radio"
  value="1"
/>
<input
  type="radio"
  value="2"
/>
<span>
  1
</span>
```
## Change
```
UPDATE: span::text "0" => "1"
```

# Update `click("input", 2)`
```html
<input
  default-checked=""
  type="radio"
  value="0"
/>
<input
  type="radio"
  value="1"
/>
<input
  checked=""
  type="radio"
  value="2"
/>
<span>
  2
</span>
```
## Change
```
UPDATE: span::text "1" => "2"
```

# Update `click("input")`
```html
<input
  checked=""
  type="radio"
  value="0"
/>
<input
  type="radio"
  value="1"
/>
<input
  type="radio"
  value="2"
/>
<span>
  0
</span>
```
## Change
```
UPDATE: span::text "2" => "0"
```
