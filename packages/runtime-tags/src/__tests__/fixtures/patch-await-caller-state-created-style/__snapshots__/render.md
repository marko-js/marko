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
<p>
  red
</p>
```
## Change
```
INSERT: .swap + :is(.cM_0, p)
REMOVE: .cM_0::text(".cM_0~*{}")
INSERT: .cM_0::text(".cM_0~*{--M_b0:red;}")
UPDATE: p::text " " => "red"
```

# Update
```js
document.querySelector("button.swap").click();
```
```html
<button
  class="swap"
>
  swap
</button>
<p>
  green
</p>
```
## Change
```
REMOVE: .cM_0::text(".cM_0~*{--M_b0:red;}")
INSERT: .cM_0::text(".cM_0~*{--M_b0:green;}")
UPDATE: p::text "red" => "green"
```
