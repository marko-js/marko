# Render {"value":1}
```html
<div
  a="0"
  b="1"
/>
```

# Mutations
```
inserted div0
```


# Render {"value":"1"}
```html
<div
  a="0"
  b="1"
/>
```

# Mutations
```

```


# Render {"value":"2"}
```html
<div
  a="0"
  b="2"
/>
```

# Mutations
```
div0: attr(b) "1" => "2"
```


# Render {"value":null}
```html
<div
  a="0"
/>
```

# Mutations
```
div0: attr(b) "2" => null
```


# Render {"value":"1"}
```html
<div
  a="0"
  b="1"
/>
```

# Mutations
```
div0: attr(b) null => "1"
```


# Render {"value":false}
```html
<div
  a="0"
/>
```

# Mutations
```
div0: attr(b) "1" => null
```