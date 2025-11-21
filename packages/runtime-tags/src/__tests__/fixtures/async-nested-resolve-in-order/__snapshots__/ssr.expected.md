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
<html>
  <head />
  <body>
    a
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text
```

# Render ASYNC
```html
<html>
  <head />
  <body>
    ab
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text1
```

# Render ASYNC
```html
<html>
  <head />
  <body>
    abc
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text2
```

# Render End
```html
<html>
  <head />
  <body>
    abcdefghijklm
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text3
```