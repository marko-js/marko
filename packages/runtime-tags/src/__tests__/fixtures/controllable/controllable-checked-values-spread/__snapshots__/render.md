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

# Update `click("input")`
```html
<input
  default-checked=""
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
  b
</span>
```
## Change
```
UPDATE: span::text "a,b" => "b"
```

# Update `click("input")`
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
  b,a
</span>
```
## Change
```
UPDATE: span::text "b" => "b,a"
```

# Update `click("input")`
```html
<input
  default-checked=""
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
  b
</span>
```
## Change
```
UPDATE: span::text "b,a" => "b"
```
