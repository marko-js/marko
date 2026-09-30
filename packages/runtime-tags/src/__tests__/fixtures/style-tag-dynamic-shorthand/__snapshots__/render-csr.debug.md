# Render `{"block":"1px","inline":"2px"}`
```html
<div
  class="box"
>
  Hi
</div>
```

# Update `{"block":"3px","inline":"4px"}`
```html
<div
  class="box"
>
  Hi
</div>
```
## Change
```
REMOVE: .cM_0::text(".cM_0~*{--M___tests__-1btemplate-1amarko_0:1px;--M___tests__-1btemplate-1amarko_1:2px;}")
INSERT: .cM_0::text(".cM_0~*{--M___tests__-1btemplate-1amarko_0:3px;--M___tests__-1btemplate-1amarko_1:2px;}")
REMOVE: .cM_0::text(".cM_0~*{--M___tests__-1btemplate-1amarko_0:3px;--M___tests__-1btemplate-1amarko_1:2px;}")
INSERT: .cM_0::text(".cM_0~*{--M___tests__-1btemplate-1amarko_0:3px;--M___tests__-1btemplate-1amarko_1:4px;}")
```
