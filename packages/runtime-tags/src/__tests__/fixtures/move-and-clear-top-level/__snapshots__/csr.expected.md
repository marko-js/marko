# Render `{"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}`

```html
<!---->
abc
<!---->
```

# Mutations
```
INSERT #comment0, #text0, #text1, #text2, #comment1
```

# Render `{"children":[]}`

```html
<!---->
<!---->
```

# Mutations
```
INSERT #text
REMOVE #text after #comment0
REMOVE #text after #comment0
REMOVE #text after #comment0
```

# Render `{"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}`

```html
<!---->
abc
<!---->
```

# Mutations
```
REMOVE #text after #comment0
INSERT #text0
INSERT #text1
INSERT #text2
```