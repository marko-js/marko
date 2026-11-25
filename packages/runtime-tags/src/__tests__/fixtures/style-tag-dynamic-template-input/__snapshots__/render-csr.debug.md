# Render `{"colors":[],"show":false,"color":"red"}`

# Update `{"colors":["red"],"show":true,"color":"red"}`
```html
<div
  class="swatch"
/>
<div
  class="swatch"
/>
```
## Change
```
INSERT: .cM_0, div:nth-of-type(1)
INSERT: .cM_1, div:nth-of-type(2)
UPDATE: .cM_1::text ".cM_1~*{}" => ".cM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19template-19input-1btags-1bswatch-1amarko_0:red;}"
```

# Update `{"colors":["blue"],"show":true,"color":"blue"}`
```html
<div
  class="swatch"
/>
<div
  class="swatch"
/>
```
## Change
```
UPDATE: .cM_0::text ".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19template-19input-1btags-1bswatch-1amarko_0:red;}" => ".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19template-19input-1btags-1bswatch-1amarko_0:blue;}"
UPDATE: .cM_1::text ".cM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19template-19input-1btags-1bswatch-1amarko_0:red;}" => ".cM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19template-19input-1btags-1bswatch-1amarko_0:blue;}"
```
