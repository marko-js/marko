# Render `{"rows":[],"items":[],"selected":1,"show":false,"colors":[],"color":"red"}`

# Update `{"rows":[1],"items":[{"id":1}],"selected":1,"show":true,"colors":["red"],"color":"red"}`
```html
<div
  class="row"
/>
<div
  class="selected"
/>
<div
  class="box"
/>
<div
  class="content"
/>
<div
  class="item"
/>
```
## Change
```
INSERT: .cM_0, .row
INSERT: .row + :is(.cM_1, .selected)
INSERT: .selected + :is(.cM_2, .box)
INSERT: .content + :is(.cM_3, .item)
UPDATE: .cM_0::text ".cM_0~*{}" => ".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_1:red;}"
UPDATE: .cM_1::text ".cM_1~*{}" => ".cM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_2:red;}"
INSERT: .box + :is(.cM_4, .content)
UPDATE: .cM_2::text ".cM_2~*{}" => ".cM_2~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_0:red;}"
UPDATE: .cM_4::text ".cM_4~*{}" => ".cM_4~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_3:red;}"
```

# Update `{"rows":[1],"items":[{"id":1}],"selected":2,"show":true,"colors":["blue"],"color":"blue"}`
```html
<div
  class="row"
/>
<div
  class="selected"
/>
<div
  class="box"
/>
<div
  class="content"
/>
<div
  class="item"
/>
```
## Change
```
UPDATE: .cM_3::text ".cM_3~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_4:red;}" => ".cM_3~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_4:blue;}"
UPDATE: .cM_0::text ".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_1:red;}" => ".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_1:blue;}"
UPDATE: .cM_1::text ".cM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_2:red;}" => ".cM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_2:blue;}"
UPDATE: .cM_2::text ".cM_2~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_0:red;}" => ".cM_2~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_0:blue;}"
UPDATE: .cM_4::text ".cM_4~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_3:red;}" => ".cM_4~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_3:blue;}"
```
