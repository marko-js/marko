# Write
```html
  <div class=abc>1 2 3</div><div class=rest>{"b":2,"c":3,"d":4}</div><div class=rest2>{"c":3,"d":4}</div><div class=rest3>{"d":4}</div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      class="abc"
    >
      1 2 3
    </div>
    <div
      class="rest"
    >
      {"b":2,"c":3,"d":4}
    </div>
    <div
      class="rest2"
    >
      {"c":3,"d":4}
    </div>
    <div
      class="rest3"
    >
      {"d":4}
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
INSERT html/body/div0/#text
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/div2
INSERT html/body/div2/#text
INSERT html/body/div3
INSERT html/body/div3/#text
```