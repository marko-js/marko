# Render
```html
abcdf
```

# Mutations
```
INSERT #text0, #text1, #text2, #text3, #text4, #text5, #text6
```

# Render ASYNC
```html
abcdef
```

# Mutations
```
INSERT #text5
REMOVE #text after #text5
UPDATE #text5 " " => "e"
```

# Render ASYNC
```html
aERROR!def
```

# Mutations
```
INSERT #text1
REMOVE #text after #text1
REMOVE #text after #text1
REMOVE #text after #text1
UPDATE #text1 " " => "ERROR!"
```