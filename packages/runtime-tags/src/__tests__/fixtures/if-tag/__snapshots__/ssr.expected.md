# Write
```html
  HelloWorld<div>B</div>
```

# Render End
```html
HelloWorld
<div>
  B
</div>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT #text
INSERT div
INSERT div/#text
```