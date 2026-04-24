# Write
```html
  <div>a</div><div>b</div><div>a</div><div>b</div>
```

# Render End
```html
<div>
  a
</div>
<div>
  b
</div>
<div>
  a
</div>
<div>
  b
</div>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div0
INSERT div0/#text
INSERT div1
INSERT div1/#text
INSERT div2
INSERT div2/#text
INSERT div3
INSERT div3/#text
```