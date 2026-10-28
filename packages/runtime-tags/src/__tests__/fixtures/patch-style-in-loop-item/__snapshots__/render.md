# Render `{"items":[{"id":"a","color":"red"}]}`
```html
<b
  class="k"
>
  item
</b>
```

# Update `{"items":[{"id":"a","color":"red"},{"id":"b","color":"blue"}]}`
```html
<b
  class="k"
>
  item
</b>
<b
  class="k"
>
  item
</b>
```
## Change
```
INSERT: b:nth-of-type(1) + :is(.cM_0, b)
```

# Update `{"items":[{"id":"b","color":"green"}]}`
```html
<b
  class="k"
>
  item
</b>
```
## Change
```
REMOVE: .cM_0::text(".cM_0~*{--M_a0:blue;}")
INSERT: .cM_0::text(".cM_0~*{--M_a0:green;}")
REMOVE: style
REMOVE: .k
```
