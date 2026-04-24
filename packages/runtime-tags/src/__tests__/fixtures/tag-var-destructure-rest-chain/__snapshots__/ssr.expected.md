# Write
```html
  <div class=abc>1 2 3</div><div class=rest>{"b":2,"c":3,"d":4}</div><div class=rest2>{"c":3,"d":4}</div><div class=rest3>{"d":4}</div>
```

# Render End
```html
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
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div0
INSERT div0/#text
INSERT div1
INSERT div1/#text
INSERT div2
INSERT div2/#text
INSERT div3
INSERT div3/#text
```