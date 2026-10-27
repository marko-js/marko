# Render `{"color":{"value":"red"}}`
```html
<div
  class="box"
>
  box
</div>
```

# Update `{"color":{"value":"blue"}}`
```html
<div
  class="box"
>
  box
</div>
```
## Change
```
REMOVE: .sM_1::text(".sM_1~*{--M_a0:red;}")
INSERT: .sM_1::text(".sM_1~*{--M_a0:blue;}")
```
