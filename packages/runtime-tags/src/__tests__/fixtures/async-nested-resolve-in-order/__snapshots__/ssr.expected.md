# Write
```html
  a
```

# Write
```html
  b
```

# Write
```html
  c
```

# Write
```html
  defghijklm
```

# Render ASYNC
```html
a
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT #text
```

# Render ASYNC
```html
ab
```

# Mutations
```
INSERT #text1
```

# Render ASYNC
```html
abc
```

# Mutations
```
INSERT #text2
```

# Render End
```html
abcdefghijklm
```

# Mutations
```
INSERT #text3
```