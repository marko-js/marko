# Write
```html
  <div><div id=foo>hi</div></div><div><div id=foo data-foo=bar>hi</div></div>
```

# Render End
```html
<div>
  <div
    id="foo"
  >
    hi
  </div>
</div>
<div>
  <div
    data-foo="bar"
    id="foo"
  >
    hi
  </div>
</div>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div0
INSERT div0/div
INSERT div0/div/#text
INSERT div1
INSERT div1/div
INSERT div1/div/#text
```