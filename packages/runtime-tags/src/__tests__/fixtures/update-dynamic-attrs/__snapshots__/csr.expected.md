# Render {"value":{"a":1,"b":2}}
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
inserted div0, div1, div2
```


# Render {"value":{"b":2,"c":3}}
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
div0: attr(a) "1" => null
div0: attr(c) null => "3"
div2: attr(c) null => "3"
div1: attr(a) "1" => "0"
div1: attr(c) null => "3"
```


# Render {"value":{}}
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
div0: attr(c) "3" => null
div0: attr(b) "2" => null
div2: attr(c) "3" => null
div2: attr(b) "2" => null
div1: attr(c) "3" => null
div1: attr(b) "2" => null
```


# Render {"value":null}
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

```


# Render {"value":{"a":1}}
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
div0: attr(a) null => "1"
div1: attr(a) "0" => "1"
```