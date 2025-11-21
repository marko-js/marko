# Render
```html
abdeg
<!---->
hj
```

# Mutations
```
INSERT #text0, #text1, #text2, #text3, #text4, #text5, #text6, #comment, #text7, #text8, #text9
```

# Render ASYNC
```html
a_B_hj
```

# Mutations
```
INSERT #text1
REMOVE #document-fragment/#text0 after #text1
REMOVE #document-fragment/#text1 after #text1
REMOVE #document-fragment/#text2 after #text1
REMOVE #document-fragment/#text0 after #text1
REMOVE #document-fragment/#text1 after #text1
REMOVE #document-fragment/#text2 after #text1
REMOVE #document-fragment/#comment after #text1
```

# Render ASYNC
```html
a_B_hij
```

# Mutations
```
INSERT #text3
REMOVE #text after #text3
UPDATE #text3 " " => "i"
```

# Render ASYNC
```html
abcd_A_
<!---->
hij
```

# Mutations
```
INSERT #text1, #text2, #text3, #text4, #comment
REMOVE #text after #comment
```

# Render ASYNC
```html
abcdefg
<!---->
hij
```

# Mutations
```
INSERT #text4, #text5, #text6
REMOVE #text after #text6
```