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
<b>
  a:0
</b>
```
## Change
```
INSERT: .swap + b
UPDATE: b::text@2 "" => "0"
UPDATE: b::text@0 "" => "a"
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
<b>
  swapped:0
</b>
```
## Change
```
UPDATE: b::text@0 "a" => "swapped"
```
