# Render
```html
<input
  type="text"
  value="hello"
/>
<span>
  hello
</span>
```

# Update `type("input", "w")`
```html
<input
  default-value="hello"
  type="text"
  value="w"
/>
<span>
  w
</span>
```
## Change
```
UPDATE: span::text "hello" => "w"
```

# Update `type("input", "wor")`
```html
<input
  default-value="hello"
  type="text"
  value="wor"
/>
<span>
  wor
</span>
```
## Change
```
UPDATE: span::text "w" => "wor"
```

# Update `type("input", "world")`
```html
<input
  default-value="hello"
  type="text"
  value="world"
/>
<span>
  world
</span>
```
## Change
```
UPDATE: span::text "wor" => "world"
```
