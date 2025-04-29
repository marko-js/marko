# Write
```html
  <div class="a b d"></div><div class="a b"></div><div class="a b c"></div><div class="a b d"></div><div class="a b"></div><div class="a b d"></div><div class="a b d" id=test>Hello</div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      class="a b d"
    />
    <div
      class="a b"
    />
    <div
      class="a b c"
    />
    <div
      class="a b d"
    />
    <div
      class="a b"
    />
    <div
      class="a b d"
    />
    <div
      class="a b d"
      id="test"
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
INSERT html/body/div6/#text
```