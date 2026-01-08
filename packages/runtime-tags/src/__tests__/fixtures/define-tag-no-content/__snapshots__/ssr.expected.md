# Write
```html
  <div>Foo Fallback</div><div>Bar Fallback</div><div>Baz Content</div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      Foo Fallback
    </div>
    <div>
      Bar Fallback
    </div>
    <div>
      Baz Content
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
INSERT html/body/div2
INSERT html/body/div2/#text
```