# Render
```html
<div
  id="outside"
>
  Pass
</div>
<!---->
<!---->
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT div, #comment0, #comment1, #text, #comment2, #comment3, #comment4
```

# Render ASYNC
```html
<div
  id="outside"
>
  Pass
</div>
<!---->
```

# Mutations
```
INSERT #text
REMOVE #comment after #text
REMOVE #comment after #text
REMOVE #text after #text
REMOVE #comment after #text
REMOVE #comment after #text
```