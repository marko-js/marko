# Render
```html
abdeg
```

# Mutations
```
INSERT #text0, #text1, #text2, #text3, #text4, #text5, #text6
```

# Render ASYNC
```html
a_A_eg
```

# Mutations
```
INSERT #text1
REMOVE #document-fragment/#text0 after #text1
REMOVE #document-fragment/#text1 after #text1
REMOVE #document-fragment/#text2 after #text1
```

# Render ASYNC
```html
a_A_efg
```

# Mutations
```
INSERT #text3
REMOVE #text after #text3
UPDATE #text3 " " => "f"
```

# Render ASYNC
```html
abcdefg
```

# Mutations
```
INSERT #text1, #text2, #text3
REMOVE #text after #text3
```