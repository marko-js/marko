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
REMOVE: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19in-19loop-19item-1btemplate-1amarko_0:blue;}")
INSERT: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19in-19loop-19item-1btemplate-1amarko_0:green;}")
REMOVE: style
REMOVE: .k
```
