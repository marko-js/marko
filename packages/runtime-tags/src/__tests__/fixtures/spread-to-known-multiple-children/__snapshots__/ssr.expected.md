# Write
```html
  <div id=known><input class=foo><input class=foo></div><div id=dynamic><input class=bar><input class=bar></div>
```

# Render End
```html
<div
  id="known"
>
  <input
    class="foo"
  />
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
  <input
    class="bar"
  />
</div>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div0
INSERT div0/input0
INSERT div0/input1
INSERT div1
INSERT div1/input0
INSERT div1/input1
```