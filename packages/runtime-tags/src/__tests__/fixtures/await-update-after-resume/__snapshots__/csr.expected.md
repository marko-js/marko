# Render
```html
<div
  id="outside"
>
  0
</div>
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT div, #comment0, #text, #comment1, #comment2
```

# Render ASYNC
```html
<div
  id="outside"
>
  0
</div>
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
<div
  id="outside"
>
  0
</div>
<!---->
<div
  id="inside"
>
  0
</div>
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, div1, #comment1
REMOVE #text after #comment1
```
# Console
```
LOG "effect ran value=0"
LOG "setup effect ran"
```

# Render ASYNC
```html
<div
  id="outside"
>
  1
</div>
<!---->
<div
  id="inside"
>
  0
</div>
<!---->
<!---->
```

# Mutations
```
UPDATE div0/#text "0" => "1"
```

# Render ASYNC
```html
<div
  id="outside"
>
  1
</div>
loading...
<!---->
```

# Mutations
```
INSERT #text
REMOVE #document-fragment/#comment0 after #text
REMOVE #document-fragment/div after #text
REMOVE #document-fragment/#comment1 after #text
```

# Render ASYNC
```html
<div
  id="outside"
>
  1
</div>
<!---->
<div
  id="inside"
>
  1
</div>
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, div1, #comment1
REMOVE #text after #comment1
```
# Console
```
LOG "effect ran value=1"
```