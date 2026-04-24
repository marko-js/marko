# Write
```html
  <div>1` <span>child`"'</span><span>${value}</span></div>
```

# Render End
```html
<div>
  1` 
  <span>
    child`"'
  </span>
  <span>
    ${value}
  </span>
</div>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div
INSERT div/#text
INSERT div/span0
INSERT div/span0/#text
INSERT div/span1
INSERT div/span1/#text
```