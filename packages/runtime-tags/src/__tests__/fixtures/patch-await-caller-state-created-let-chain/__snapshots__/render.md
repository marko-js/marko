# Render `{"show":false,"label":"a","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
```

# Update `{"show":true,"label":"b","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
<p
  class="v"
>
  a|a|a
</p>
<p>
  a
</p>
<button>
  log
</button>
```
## Change
```
INSERT: .swap + :is(.cM_0, .v, p, button)
UPDATE: .v::text@4 "" => "a"
REMOVE: .cM_0::text(".cM_0~*{}")
INSERT: .cM_0::text(".cM_0~*{--M_c0:a;}")
UPDATE: .v::text@2 "" => "a"
UPDATE: .v::text@0 "" => "a"
UPDATE: p:nth-of-type(2)::text " " => "a"
```

# Update
```js
document.querySelector("button.swap").click();
```
