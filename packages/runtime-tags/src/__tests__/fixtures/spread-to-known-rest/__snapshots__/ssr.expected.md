# Write
```html
  <div id=value-missing><input class=foo></div><div id=value-undefined><input class=foo></div><div id=value-set><input value=abcd class=foo></div><div id=dynamic><input class=bar></div>
```

# Render End
```html
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
INSERT div2
INSERT div2/input
INSERT div3
INSERT div3/input
```