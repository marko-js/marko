# Write
```html
  <div>Foo Fallback</div><div>Bar Fallback</div><div>Baz Content</div>
```

# Render End
```html
<div>
  Foo Fallback
</div>
<div>
  Bar Fallback
</div>
<div>
  Baz Content
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
```