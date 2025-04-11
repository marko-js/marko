# Write
```html
  <span>child</span><div>parent 1</div>
```

# Render End
```html
<html>
  <head />
  <body>
    <span>
      child
    </span>
    <div>
      parent 1
    </div>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/div
INSERT html/body/div/#text
```