# Write
```html
  <div><span id=1>a</span><span id=2>b</span><span id=3>c</span><span id=4>d</span><span id=5>e</span></div>
```

# Render End
```html
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
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div
INSERT div/span0
INSERT div/span0/#text
INSERT div/span1
INSERT div/span1/#text
INSERT div/span2
INSERT div/span2/#text
INSERT div/span3
INSERT div/span3/#text
INSERT div/span4
INSERT div/span4/#text
```