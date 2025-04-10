# Write
```html
  <div><p>1: a</p><p>2: b</p><p>3: c</p><p>1</p><p>2</p><p>3</p></div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <p>
        1: a
      </p>
      <p>
        2: b
      </p>
      <p>
        3: c
      </p>
      <p>
        1
      </p>
      <p>
        2
      </p>
      <p>
        3
      </p>
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
INSERT html/body/div/p0
INSERT html/body/div/p0/#text
INSERT html/body/div/p1
INSERT html/body/div/p1/#text
INSERT html/body/div/p2
INSERT html/body/div/p2/#text
INSERT html/body/div/p3
INSERT html/body/div/p3/#text
INSERT html/body/div/p4
INSERT html/body/div/p4/#text
INSERT html/body/div/p5
INSERT html/body/div/p5/#text
```