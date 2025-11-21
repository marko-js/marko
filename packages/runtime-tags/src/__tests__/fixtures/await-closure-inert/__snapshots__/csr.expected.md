# Render
```html
<!---->
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, #comment1, #text, #comment2, #comment3
```

# Render ASYNC
```html
<!---->
loading...
<!---->
```

# Mutations
```
INSERT #text
REMOVE #document-fragment/#comment0 after #text
REMOVE #document-fragment/#text after #text
REMOVE #document-fragment/#comment1 after #text
```

# Render ASYNC
```html
<!---->
<!---->
<span>
  1
</span>
<!---->
<!---->
```

# Mutations
```
INSERT #comment1, span, #comment2
REMOVE #text after #comment2
UPDATE span/#text " " => "1"
```