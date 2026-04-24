# Write
```html
  BEFORE-M-<h1>Hello World</h1>-AFTER
```

# Render End
```html
BEFORE-M-
<h1>
  Hello World
</h1>
-AFTER
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT #text0
INSERT h1
INSERT h1/#text
INSERT #text1
```