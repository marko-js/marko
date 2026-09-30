# Render `{"show":true,"color":"red"}`
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

# Update `{"show":false,"color":"red"}`
```html
<span>
  after
</span>
```
## Change
```
REMOVE: style
REMOVE: div
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
INSERT: .cM_1, .box
INSERT: .cM_1::text("--M___tests__-1btemplate-1amarko_0:blue;}")
UPDATE: .cM_1[class] null => "cM_1"
REMOVE: .cM_1::text("--M___tests__-1btemplate-1amarko_0:blue;}")
INSERT: .cM_1::text(".cM_1~*{}")
```
