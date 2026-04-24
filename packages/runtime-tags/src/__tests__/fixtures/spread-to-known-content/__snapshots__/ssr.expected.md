# Write
```html
  <div id=content-missing><p class=foo></p></div><div id=content-undefined><p class=foo></p></div><div id=content-set><p class=foo>Hello World</p></div><div id=dynamic><p class=bar>Hello World</p></div>
```

# Render End
```html
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
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div0
INSERT div0/p
INSERT div1
INSERT div1/p
INSERT div2
INSERT div2/p
INSERT div2/p/#text
INSERT div3
INSERT div3/p
INSERT div3/p/#text
```