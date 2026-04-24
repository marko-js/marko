# Write
```html
  <div><span id=1>a</span><span id=2>b</span><span id=3>c</span></div>
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
```