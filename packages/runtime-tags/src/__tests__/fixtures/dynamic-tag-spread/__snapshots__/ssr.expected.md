# Write
```html
  <div><div id=foo>hi</div></div><div><div id=foo>hi</div></div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <div
        id="foo"
      >
        hi
      </div>
    </div>
    <div>
      <div
        id="foo"
      >
        hi
      </div>
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
INSERT html/body/div0/div
INSERT html/body/div0/div/#text
INSERT html/body/div1
INSERT html/body/div1/div
INSERT html/body/div1/div/#text
```