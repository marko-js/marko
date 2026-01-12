# Write
```html
  <div id=content-missing><p class=foo></p></div><div id=content-undefined><p class=foo></p></div><div id=content-set><p class=foo>Hello World</p></div><div id=dynamic><p class=bar>Hello World</p></div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      id="content-missing"
    >
      <p
        class="foo"
      />
    </div>
    <div
      id="content-undefined"
    >
      <p
        class="foo"
      />
    </div>
    <div
      id="content-set"
    >
      <p
        class="foo"
      >
        Hello World
      </p>
    </div>
    <div
      id="dynamic"
    >
      <p
        class="bar"
      >
        Hello World
      </p>
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
INSERT html/body/div0/p
INSERT html/body/div1
INSERT html/body/div1/p
INSERT html/body/div2
INSERT html/body/div2/p
INSERT html/body/div2/p/#text
INSERT html/body/div3
INSERT html/body/div3/p
INSERT html/body/div3/p/#text
```