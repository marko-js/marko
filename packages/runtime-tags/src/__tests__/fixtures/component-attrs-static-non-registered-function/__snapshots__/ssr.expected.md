# Write
```html
  <div>$1.00</div><div>$1.11</div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      $1.00
    </div>
    <div>
      $1.11
    </div>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div0
INSERT html/body/div0/#text
INSERT html/body/div1
INSERT html/body/div1/#text
```