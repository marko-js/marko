# Render `{"colors":["red"]}`
```html
<div
  class="box"
>
  red
</div>
<span>
  after
</span>
```

# Update `{"colors":["red","blue"]}`
```html
<div
  class="box"
>
  red
</div>
<div
  class="box"
>
  blue
</div>
<span>
  after
</span>
```
## Change
```
INSERT: div:nth-of-type(1) + :is(.cM_1, div)
```

# Update `{"colors":["red","green"]}`
```html
<div
  class="box"
>
  red
</div>
<div
  class="box"
>
  green
</div>
<span>
  after
</span>
```
## Change
```
REMOVE: .cM_1::text(".cM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19loop-19param-1btemplate-1amarko_0:blue;}")
INSERT: .cM_1::text(".cM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19loop-19param-1btemplate-1amarko_0:green;}")
UPDATE: div:nth-of-type(2)::text "blue" => "green"
```
