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
<b
  class="k"
>
  a
</b>
```
## Change
```
INSERT: .swap + .k
UPDATE: .k[class] null => "k"
UPDATE: .k::text " " => "a"
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
<b
  class="k"
>
  swapped
</b>
```
## Change
```
UPDATE: .k::text "a" => "swapped"
```
