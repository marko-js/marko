# Write
```html
  <div><span>a</span><span>b</span><span>c</span><span>d</span></div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <span>
        a
      </span>
      <span>
        b
      </span>
      <span>
        c
      </span>
      <span>
        d
      </span>
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
INSERT html/body/div/span1/#text
INSERT html/body/div/span2
INSERT html/body/div/span2/#text
INSERT html/body/div/span3
INSERT html/body/div/span3/#text
```