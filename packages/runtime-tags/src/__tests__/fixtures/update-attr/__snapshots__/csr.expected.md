# Render `{"value":1}`

```html
<div
  a="0"
  b="1"
/>
```

# Mutations
```
INSERT div
```

# Render `{"value":"1"}`

```html
<div
  a="0"
  b="1"
/>
```


# Render `{"value":"2"}`

```html
<div
  a="0"
  b="2"
/>
```

# Mutations
```
UPDATE div[b] "1" => "2"
```

# Render `{"value":null}`

```html
<div
  a="0"
/>
```

# Mutations
```
UPDATE div[b] "2" => null
```

# Render `{"value":"1"}`

```html
<div
  a="0"
  b="1"
/>
```

# Mutations
```
UPDATE div[b] null => "1"
```

# Render `{"value":false}`

```html
<div
  a="0"
/>
```

# Mutations
```
UPDATE div[b] "1" => null
```