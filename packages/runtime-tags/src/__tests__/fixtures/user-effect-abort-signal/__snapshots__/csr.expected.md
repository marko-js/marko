# Render `{"value":0}`

```html
<div>
  0 0
</div>
```

# Mutations
```
INSERT div
```

# Render ASYNC
```html
<div>
  1 0
</div>
```

# Mutations
```
UPDATE div/#text0 "0" => "1"
```

# Render `{"value":1}`

```html
<div>
  1 0
</div>
```


# Render ASYNC
```html
<div>
  2 1
</div>
```

# Mutations
```
UPDATE div/#text2 "0" => "1"
UPDATE div/#text0 "1" => "2"
```