# Write
```html
  <div><div>1</div><div>2</div><div>3</div></div><div><div>1</div><div>2</div><div>3</div><div></div></div>
```

# Render End
```html
<div>
  <div>
    1
  </div>
  <div>
    2
  </div>
  <div>
    3
  </div>
</div>
<div>
  <div>
    1
  </div>
  <div>
    2
  </div>
  <div>
    3
  </div>
  <div />
</div>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div0
INSERT div0/div0
INSERT div0/div0/#text
INSERT div0/div1
INSERT div0/div1/#text
INSERT div0/div2
INSERT div0/div2/#text
INSERT div1
INSERT div1/div0
INSERT div1/div0/#text
INSERT div1/div1
INSERT div1/div1/#text
INSERT div1/div2
INSERT div1/div2/#text
INSERT div1/div3
```