# Render {"value":1}
```html
<div a="0"
     b="1"
>
</div>
```

# Mutations
```
inserted #text0, div1, #text2
```


# Render {"value":"1"}
```html
<div a="0"
     b="1"
>
</div>
```

# Mutations
```

```


# Render {"value":"2"}
```html
<div a="0"
     b="2"
>
</div>
```

# Mutations
```
div1: attr(b) "1" => "2"
```


# Render {"value":null}
```html
<div a="0">
</div>
```

# Mutations
```
div1: attr(b) "2" => null
```


# Render {"value":"1"}
```html
<div a="0"
     b="1"
>
</div>
```

# Mutations
```
div1: attr(b) null => "1"
```


# Render {"value":false}
```html
<div a="0">
</div>
```

# Mutations
```
div1: attr(b) "1" => null
```


--- Hydrate ---
# Render {"value":1}
```html
<div a="0"
     b="1"
>
</div>
```

# Mutations
```
div1: attr(a) "0" => "0"
div1: attr(b) "1" => "1"
removed #comment after #text0
```