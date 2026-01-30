# Write
```html
  <div id=known><input class=foo></div><div id=dynamic><input class=bar></div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      id="known"
    >
      <input
        class="foo"
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
```