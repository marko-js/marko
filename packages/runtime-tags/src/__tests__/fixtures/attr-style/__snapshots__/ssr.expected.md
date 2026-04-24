# Write
```html
  <div style=color:red></div><div style=width:100px></div><div style="color: green"></div><div style=color:red></div><div style=width:100px></div><div style="color: green"></div><div style=color:green></div><div style=color:green id=test>Hello</div>
```

# Render End
```html
<div
  style="color:red"
/>
<div
  style="width:100px"
/>
<div
  style="color:green"
/>
<div
  style="color:red"
/>
<div
  style="width:100px"
/>
<div
  style="color:green"
/>
<div
  style="color:green"
/>
<div
  id="test"
  style="color:green"
>
  Hello
</div>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div0
INSERT div1
INSERT div2
INSERT div3
INSERT div4
INSERT div5
INSERT div6
INSERT div7
INSERT div7/#text
```