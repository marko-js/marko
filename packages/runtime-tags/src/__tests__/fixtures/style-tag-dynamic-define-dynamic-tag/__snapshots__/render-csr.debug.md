# Render `{"show":false,"color":"red"}`
```html
<span>
  after
</span>
```

# Update `{"show":true,"color":"red"}`
```html
<div
  class="box"
>
  Hi
</div>
<span>
  after
</span>
```
## Change
```
INSERT: .cM_0, .box
UPDATE: .cM_0::text ".cM_0~*{}" => ".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19define-19dynamic-19tag-1btemplate-1amarko_0:red;}"
```

# Update `{"show":true,"color":"blue"}`
```html
<div
  class="box"
>
  Hi
</div>
<span>
  after
</span>
```
## Change
```
UPDATE: .cM_0::text ".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19define-19dynamic-19tag-1btemplate-1amarko_0:red;}" => ".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19define-19dynamic-19tag-1btemplate-1amarko_0:blue;}"
```
