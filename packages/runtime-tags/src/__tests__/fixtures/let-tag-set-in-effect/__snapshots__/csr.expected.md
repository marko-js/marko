# Render
```html
<span>
  1
</span>
<span>
  0
</span>
```

# Mutations
```
INSERT span0, span1
```

# Render ASYNC
```html
<span>
  2
</span>
<span>
  1
</span>
```

# Mutations
```
UPDATE span1/#text "0" => "1"
UPDATE span0/#text "1" => "2"
```

# Render ASYNC
```html
<span>
  2
</span>
<span>
  2
</span>
```

# Mutations
```
UPDATE span1/#text "1" => "2"
```