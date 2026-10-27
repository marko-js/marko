# Render `{"hint":"a","v":"x"}`
```html
<input
  placeholder="a"
  value="x"
/>
```

# Update `{"hint":"b","v":"y"}`
```html
<input
  default-value="x"
  placeholder="b"
  value="y"
/>
```
## Change
```
UPDATE: input[placeholder] "a" => "b"
```
