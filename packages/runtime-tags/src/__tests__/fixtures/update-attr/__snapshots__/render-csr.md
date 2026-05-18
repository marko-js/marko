# Render `{"value":1}`
```html
<div
  a="0"
  b="1"
/>
```

# Update `{"value":"1"}`
```html
<div
  a="0"
  b="1"
/>
```

# Update `{"value":"2"}`
```html
<div
  a="0"
  b="2"
/>
```
## Change
```
UPDATE: div[b] "1" => "2"
```

# Update `{"value":null}`
```html
<div
  a="0"
/>
```
## Change
```
UPDATE: div[b] "2" => null
```

# Update `{"value":"1"}`
```html
<div
  a="0"
  b="1"
/>
```
## Change
```
UPDATE: div[b] null => "1"
```

# Update `{"value":false}`
```html
<div
  a="0"
/>
```
## Change
```
UPDATE: div[b] "1" => null
```
