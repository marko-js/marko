# Write
```html
  <div id=known><input class=foo></div><div id=dynamic><input class=bar></div>
```

# Render End
```html
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
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div0
INSERT div0/input
INSERT div1
INSERT div1/input
```