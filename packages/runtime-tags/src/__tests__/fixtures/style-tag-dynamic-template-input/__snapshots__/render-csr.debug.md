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
INSERT: .cM_0, div
INSERT: div:nth-of-type(1) + :is(.cM_1, div)
REMOVE: .cM_1::text(".cM_1~*{}")
INSERT: .cM_1::text(".cM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19template-19input-1btags-1bswatch-1amarko_0:red;}")
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
REMOVE: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19template-19input-1btags-1bswatch-1amarko_0:red;}")
INSERT: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19template-19input-1btags-1bswatch-1amarko_0:blue;}")
REMOVE: .cM_1::text(".cM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19template-19input-1btags-1bswatch-1amarko_0:red;}")
INSERT: .cM_1::text(".cM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19template-19input-1btags-1bswatch-1amarko_0:blue;}")
```
