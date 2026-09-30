# Render
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<input
  checked=""
  type="checkbox"
  value="b"
/>
<input
  type="checkbox"
  value="c"
/>
<span>
  a,b
</span>
```

# Update `click("input", 1)`
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<input
  default-checked=""
  type="checkbox"
  value="b"
/>
<input
  type="checkbox"
  value="c"
/>
<span>
  a
</span>
```
## Change
```
UPDATE: span::text "a,b" => "a"
```

# Update `click("input", 2)`
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<input
  default-checked=""
  type="checkbox"
  value="b"
/>
<input
  checked=""
  type="checkbox"
  value="c"
/>
<span>
  a,c
</span>
```
## Change
```
UPDATE: span::text "a" => "a,c"
```

# Update `click("input")`
```html
<input
  default-checked=""
  type="checkbox"
  value="a"
/>
<input
  default-checked=""
  type="checkbox"
  value="b"
/>
<input
  checked=""
  type="checkbox"
  value="c"
/>
<span>
  c
</span>
```
## Change
```
UPDATE: span::text "a,c" => "c"
```
