# Render
```html
-- Start
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT #text0, #comment0, #comment1, #text1, #text2, #comment2
```

# Render ASYNC
```html
-- Start
<!---->
<div>
  Caught: promise2 rejected
</div>
```

# Mutations
```
INSERT div
REMOVE #comment after div
REMOVE #text after div
REMOVE #text after div
REMOVE #comment after div
UPDATE div/#text1 "" => "promise2 rejected"
```