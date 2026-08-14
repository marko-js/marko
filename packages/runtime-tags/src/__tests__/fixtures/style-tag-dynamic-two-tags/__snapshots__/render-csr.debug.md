# Render `{"a":"red","b":"blue"}`
```html
<div
  class="a"
>
  A
</div>
<div
  class="b"
>
  B
</div>
```

# Update `{"a":"green","b":"purple"}`
```html
<div
  class="a"
>
  A
</div>
<div
  class="b"
>
  B
</div>
```
## Change
```
REMOVE: .cM_1::text(".cM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19two-19tags-1btemplate-1amarko_0:red;--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19two-19tags-1btemplate-1amarko_1:blue;}")
INSERT: .cM_1::text(".cM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19two-19tags-1btemplate-1amarko_0:green;--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19two-19tags-1btemplate-1amarko_1:blue;}")
REMOVE: .cM_1::text(".cM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19two-19tags-1btemplate-1amarko_0:green;--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19two-19tags-1btemplate-1amarko_1:blue;}")
INSERT: .cM_1::text(".cM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19two-19tags-1btemplate-1amarko_0:green;--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19two-19tags-1btemplate-1amarko_1:purple;}")
```
