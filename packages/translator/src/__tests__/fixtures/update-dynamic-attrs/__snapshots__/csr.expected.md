# Render {"value":{"a":1,"b":2}}
```html
<div
  a="1"
  b="2"
/>
```

# Mutations
```
inserted div0
```


# Render {"value":{"b":2,"c":3}}
```html
<div
  b="2"
  c="3"
/>
```

# Mutations
```
div0: attr(a) "1" => null
div0: attr(c) null => "3"
```


# Render {"value":{}}
```html
<div />
```

# Mutations
```
div0: attr(b) "2" => null
div0: attr(c) "3" => null
```


# Render {"value":null}
```html
<div />
```

# Mutations
```

```


# Render {"value":{"a":1}}
```html
<div
  a="1"
/>
```

# Mutations
```
div0: attr(a) null => "1"
```