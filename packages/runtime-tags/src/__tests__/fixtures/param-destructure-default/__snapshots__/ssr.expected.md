# Write
```html
  <div class=a>0 object</div><div class=a>1 object</div><div class=a>2 undefined</div><div class=b>0 object</div><div class=b>1 object</div><div class=b>2 undefined</div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      class="a"
    >
      0 object
    </div>
    <div
      class="a"
    >
      1 object
    </div>
    <div
      class="a"
    >
      2 undefined
    </div>
    <div
      class="b"
    >
      0 object
    </div>
    <div
      class="b"
    >
      1 object
    </div>
    <div
      class="b"
    >
      2 undefined
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
INSERT html/body/div3
INSERT html/body/div3/#text
INSERT html/body/div4
INSERT html/body/div4/#text
INSERT html/body/div5
INSERT html/body/div5/#text
```