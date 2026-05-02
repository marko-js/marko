# Render
```html
a
```


# Write
```html
  b
```

# Render FLUSH
```html
ab
```

# Mutations
```
INSERT #text1
```

# Write
```html
  c
```

# Render FLUSH
```html
abc
```

# Mutations
```
INSERT #text2
```

# Write
```html
  defghijklm
```

# Render FLUSH
```html
abcdefghijklm
```

# Mutations
```
INSERT #text3
```