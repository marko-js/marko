# Render `{"color":"green","width":"10px"}`
```html
<header
  class="a"
>
  Header
</header>
<main
  class="a"
>
  Main
</main>
```

# Update `{"color":"blue","width":"20px"}`
```html
<header
  class="a"
>
  Header
</header>
<main
  class="a"
>
  Main
</main>
```
## Change
```
REMOVE: .cM_0::text(".cM_0~*{--M___tests__-1btemplate-1amarko_0:green;--M___tests__-1btemplate-1amarko_1:10px;}")
INSERT: .cM_0::text(".cM_0~*{--M___tests__-1btemplate-1amarko_0:blue;--M___tests__-1btemplate-1amarko_1:10px;}")
REMOVE: .cM_0::text(".cM_0~*{--M___tests__-1btemplate-1amarko_0:blue;--M___tests__-1btemplate-1amarko_1:10px;}")
INSERT: .cM_0::text(".cM_0~*{--M___tests__-1btemplate-1amarko_0:blue;--M___tests__-1btemplate-1amarko_1:20px;}")
```
