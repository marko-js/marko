# Write
```html
  <div><span>Hello</span><span></span><span></span></div>
```

# Render End
```html
<div>
  <span>
    Hello
  </span>
  <span />
  <span />
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
INSERT div/span2
```