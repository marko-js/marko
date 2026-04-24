# Write
```html
  <div><span>a</span><span>b</span><span>c</span><span>d</span></div>
```

# Render End
```html
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
```