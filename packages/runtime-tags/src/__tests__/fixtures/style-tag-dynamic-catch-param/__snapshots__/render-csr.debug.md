# Render `{"show":false}`

# Update `{"show":true}`
```html
<div
  class="caught"
/>
```
## Change
```
INSERT: ::text(" ")
REMOVE: ::text(" ")
INSERT: .cM_0, .caught
UPDATE: .cM_0[class] null => "cM_0"
INSERT: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19catch-19param-1btemplate-1amarko_0:red;}")
UPDATE: .cM_0::text ".cM_0~*{}" => ".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19catch-19param-1btemplate-1amarko_0:red;}"
```
