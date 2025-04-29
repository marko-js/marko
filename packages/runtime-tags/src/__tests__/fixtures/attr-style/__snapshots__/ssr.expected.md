# Write
```html
  <div style=color:red></div><div style=width:100px></div><div style="color: green"></div><div style=color:red></div><div style=width:100px></div><div style="color: green"></div><div style=color:green></div><div style=color:green id=test>Hello</div>
```

# Render End
```html
<html>
  <head />
  <body>
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
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div0
INSERT html/body/div1
INSERT html/body/div2
INSERT html/body/div3
INSERT html/body/div4
INSERT html/body/div5
INSERT html/body/div6
INSERT html/body/div7
INSERT html/body/div7/#text
```