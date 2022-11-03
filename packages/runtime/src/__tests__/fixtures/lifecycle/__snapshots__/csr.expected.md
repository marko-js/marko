# Render {"value":0}
```html
<div>
  0
</div>
```

# Mutations
```
inserted div0
```


# Render "ASYNC"
```html
<div>
  mount
</div>
```

# Mutations
```
div0/#text0: "0" => "mount"
```


# Render {"value":1}
```html
<div>
  mount
</div>
```

# Mutations
```

```


# Render "ASYNC"
```html
<div>
  update
</div>
```

# Mutations
```
div0/#text0: "mount" => "update"
```