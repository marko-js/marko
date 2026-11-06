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
UPDATE: .cM_0[class] null => "cM_0"
INSERT: .cM_0::text(".cM_0~*{}")
REMOVE: .cM_0::text(".cM_0~*{}")
INSERT: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19style-19in-19loop-19item-1btemplate-1amarko_0:blue;}")
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
REMOVE: style
REMOVE: .k
REMOVE: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19style-19in-19loop-19item-1btemplate-1amarko_0:blue;}")
INSERT: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19style-19in-19loop-19item-1btemplate-1amarko_0:green;}")
```
