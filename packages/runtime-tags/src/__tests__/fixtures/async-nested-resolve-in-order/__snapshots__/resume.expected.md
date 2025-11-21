# Render
```html
<html>
  <head />
  <body>
    a
  </body>
</html>
```


# Render FLUSH
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

# Render FLUSH
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

# Render FLUSH
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