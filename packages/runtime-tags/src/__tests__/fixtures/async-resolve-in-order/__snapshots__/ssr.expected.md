# Write
```html
  a
```

# Write
```html
  bc
```

# Write
```html
  de
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
    abc
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
    abcde
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text2
```