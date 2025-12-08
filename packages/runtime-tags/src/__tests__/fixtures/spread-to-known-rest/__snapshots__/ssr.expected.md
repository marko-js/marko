# Write
```html
  <div id=value-missing><input class=foo></div><div id=value-undefined><input class=foo></div><div id=value-set><input class=foo value=abcd></div><div id=dynamic><input class=bar></div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      id="value-missing"
    >
      <input
        class="foo"
      />
    </div>
    <div
      id="value-undefined"
    >
      <input
        class="foo"
      />
    </div>
    <div
      id="value-set"
    >
      <input
        class="foo"
        value="abcd"
      />
    </div>
    <div
      id="dynamic"
    >
      <input
        class="bar"
      />
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
INSERT html/body/div0/input
INSERT html/body/div1
INSERT html/body/div1/input
INSERT html/body/div2
INSERT html/body/div2/input
INSERT html/body/div3
INSERT html/body/div3/input
```