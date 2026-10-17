# Render `{"kind":"text","value":"a"}`
```html
<input
  type="text"
  value="a"
/>
```

# Update `{"kind":"text","value":"b"}`

# Update `{"kind":"number","value":"3"}`
```html
<input
  default-value="a"
  type="number"
  value="3"
/>
```
## Change
```
UPDATE: input[type] "text" => "number"
```

# Update `{"kind":"text","value":"c"}`
```html
<input
  default-value="a"
  type="text"
  value="c"
/>
```
## Change
```
UPDATE: input[type] "number" => "text"
```
