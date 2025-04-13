# Write
```html
  <div><span>Hello</span><span></span><span></span></div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <span>
        Hello
      </span>
      <span />
      <span />
    </div>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/div/span0
INSERT html/body/div/span0/#text
INSERT html/body/div/span1
INSERT html/body/div/span2
```