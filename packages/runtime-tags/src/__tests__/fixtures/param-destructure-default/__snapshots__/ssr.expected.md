# Write
```html
  <div class=a>0 object</div><div class=a>1 object</div><div class=a>2 undefined</div><div class=b>0 object</div><div class=b>1 object</div><div class=b>2 undefined</div>
```

# Render End
```html
<div
  class="a"
>
  0 object
</div>
<div
  class="a"
>
  1 object
</div>
<div
  class="a"
>
  2 undefined
</div>
<div
  class="b"
>
  0 object
</div>
<div
  class="b"
>
  1 object
</div>
<div
  class="b"
>
  2 undefined
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
INSERT div4
INSERT div4/#text
INSERT div5
INSERT div5/#text
```