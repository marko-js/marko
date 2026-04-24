# Write
```html
  <div><p>1: a</p><p>2: b</p><p>3: c</p><p>1</p><p>2</p><p>3</p></div>
```

# Render End
```html
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
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div
INSERT div/p0
INSERT div/p0/#text
INSERT div/p1
INSERT div/p1/#text
INSERT div/p2
INSERT div/p2/#text
INSERT div/p3
INSERT div/p3/#text
INSERT div/p4
INSERT div/p4/#text
INSERT div/p5
INSERT div/p5/#text
```