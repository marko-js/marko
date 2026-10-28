# Render `{"show":false,"color":"red"}`

# Update `{"show":true,"color":"red"}`
```html
<div
  class="now"
/>
```
## Change
```
INSERT: .cM_0, .now
REMOVE: .cM_0::text(".cM_0~*{}")
INSERT: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19await-19param-1btemplate-1amarko_1:red;}")
```

# Update
```html
<div
  class="later"
/>
<div
  class="now"
/>
```
## Change
```
INSERT: .cM_1, .later
REMOVE: .cM_1::text(".cM_1~*{}")
INSERT: .cM_1::text(".cM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19await-19param-1btemplate-1amarko_0:red;}")
```

# Update `{"show":true,"color":"blue"}`
```html
<div
  class="later"
/>
<div
  class="now"
/>
```
## Change
```
REMOVE: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19await-19param-1btemplate-1amarko_1:red;}")
INSERT: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19await-19param-1btemplate-1amarko_1:blue;}")
```

# Update
```html
<div
  class="now"
/>
```
## Change
```
REMOVE: style
REMOVE: div
```

# Update
```html
<div
  class="later"
/>
<div
  class="now"
/>
```
## Change
```
INSERT: .cM_1, .later
```
