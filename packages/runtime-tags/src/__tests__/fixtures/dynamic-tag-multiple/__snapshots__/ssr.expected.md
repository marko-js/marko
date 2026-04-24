# Write
```html
  <div><div>hi</div></div><div><div>hi</div></div><div><div>hi</div></div><div><div>hi</div></div>
```

# Render End
```html
<div>
  <div>
    hi
  </div>
</div>
<div>
  <div>
    hi
  </div>
</div>
<div>
  <div>
    hi
  </div>
</div>
<div>
  <div>
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
INSERT div2
INSERT div2/div
INSERT div2/div/#text
INSERT div3
INSERT div3/div
INSERT div3/div/#text
```