# Render
```html
<input
  checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  type="radio"
  value="c"
/>
<span>
  a
</span>
```

# Update `click("input", 1)`
```html
<input
  default-checked=""
  type="radio"
  value="a"
/>
<input
  checked=""
  type="radio"
  value="b"
/>
<input
  type="radio"
  value="c"
/>
<span>
  b
</span>
```
## Change
```
UPDATE: span::text "a" => "b"
```

# Update `click("input", 2)`
```html
<input
  default-checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  checked=""
  type="radio"
  value="c"
/>
<span>
  c
</span>
```
## Change
```
UPDATE: span::text "b" => "c"
```

# Update `click("input")`
```html
<input
  checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  type="radio"
  value="c"
/>
<span>
  a
</span>
```
## Change
```
UPDATE: span::text "c" => "a"
```
