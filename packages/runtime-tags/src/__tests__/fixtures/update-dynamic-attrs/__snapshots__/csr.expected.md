# Render `{"value":{"a":1,"b":2}}`

```html
<div
  a="1"
  b="2"
/>
<div
  a="1"
  b="2"
/>
<div
  a="0"
  b="2"
/>
```

# Mutations
```
INSERT div0, div1, div2
```

# Render `{"value":{"b":2,"c":3}}`

```html
<div
  b="2"
  c="3"
/>
<div
  a="0"
  b="2"
  c="3"
/>
<div
  a="0"
  b="2"
  c="3"
/>
```

# Mutations
```
UPDATE div0[a] "1" => null
UPDATE div0[c] null => "3"
UPDATE div2[c] null => "3"
UPDATE div1[a] "1" => "0"
UPDATE div1[c] null => "3"
```

# Render `{"value":{}}`

```html
<div />
<div
  a="0"
/>
<div
  a="0"
/>
```

# Mutations
```
UPDATE div0[c] "3" => null
UPDATE div0[b] "2" => null
UPDATE div2[c] "3" => null
UPDATE div2[b] "2" => null
UPDATE div1[c] "3" => null
UPDATE div1[b] "2" => null
```

# Render `{"value":null}`

```html
<div />
<div
  a="0"
/>
<div
  a="0"
/>
```


# Render `{"value":{"a":1}}`

```html
<div
  a="1"
/>
<div
  a="1"
/>
<div
  a="0"
/>
```

# Mutations
```
UPDATE div0[a] null => "1"
UPDATE div1[a] "0" => "1"
```