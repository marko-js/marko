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

# Update `{"value":{"b":2,"c":3}}`
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
## Change
```
UPDATE: div:nth-of-type(1)[a] "1" => null
UPDATE: div:nth-of-type(1)[c] null => "3"
UPDATE: div:nth-of-type(3)[c] null => "3"
UPDATE: div:nth-of-type(2)[a] "1" => "0"
UPDATE: div:nth-of-type(2)[c] null => "3"
```

# Update `{"value":{}}`
```html
<div />
<div
  a="0"
/>
<div
  a="0"
/>
```
## Change
```
UPDATE: div:nth-of-type(1)[c] "3" => null
UPDATE: div:nth-of-type(1)[b] "2" => null
UPDATE: div:nth-of-type(3)[c] "3" => null
UPDATE: div:nth-of-type(3)[b] "2" => null
UPDATE: div:nth-of-type(2)[c] "3" => null
UPDATE: div:nth-of-type(2)[b] "2" => null
```

# Update `{"value":null}`

# Update `{"value":{"a":1}}`
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
## Change
```
UPDATE: div:nth-of-type(1)[a] null => "1"
UPDATE: div:nth-of-type(2)[a] "0" => "1"
```
