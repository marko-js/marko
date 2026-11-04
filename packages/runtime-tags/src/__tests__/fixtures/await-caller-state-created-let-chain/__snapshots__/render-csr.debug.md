# Render `{"show":false,"label":"a","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
```

# Update `{"show":true,"label":"b","promise":{}}`

# Update
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
UPDATE: p:nth-of-type(2)::text " " => "a"
UPDATE: .v::text@0 "" => "a"
REMOVE: .cM_0::text(".cM_0~*{}")
INSERT: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19let-19chain-1btags-1bshow-19await-1amarko_0:a;}")
UPDATE: .v::text@2 "" => "a"
UPDATE: .v::text@4 "" => "a"
```

# Update
```js
document.querySelector("button.swap").click();
```
