# Render {"value":{"a":1,"b":2}}
```html
<div
  a="1"
  b="2"
/>
```

# Mutations
```
inserted #text0, div1, #text2
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
div1: attr(a) "1" => null
div1: attr(b) "2" => "2"
div1: attr(c) null => "3"
```


# Render {"value":{}}
```html
<div />
```

# Mutations
```
div1: attr(b) "2" => null
div1: attr(c) "3" => null
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
div1: attr(a) null => "1"
```


--- Hydrate ---
# Render {"value":{"a":1,"b":2}}
```html
<div
  a="1"
  b="2"
/>
```

# Mutations
```
div1: attr(a) "1" => "1"
div1: attr(b) "2" => "2"
removed #comment after #text0
removed #comment after div1
```