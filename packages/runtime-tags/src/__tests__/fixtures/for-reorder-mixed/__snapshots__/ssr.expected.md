# Write
```html
  <div><span id=1>a</span><span id=2>b</span><span id=3>c</span><span id=4>d</span><span id=5>e</span></div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <span
        id="1"
      >
        a
      </span>
      <span
        id="2"
      >
        b
      </span>
      <span
        id="3"
      >
        c
      </span>
      <span
        id="4"
      >
        d
      </span>
      <span
        id="5"
      >
        e
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
INSERT html/body/div/span4
INSERT html/body/div/span4/#text
```