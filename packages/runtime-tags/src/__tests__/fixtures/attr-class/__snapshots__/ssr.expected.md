# Write
```html
  <div class="a b d"></div><div class="a b"></div><div class="a b c"></div><div class="a b d"></div><div class="a b"></div><div class="a b d"></div><div class="a b d" id=test>Hello</div>
```

# Render End
```html
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
INSERT div6/#text
```