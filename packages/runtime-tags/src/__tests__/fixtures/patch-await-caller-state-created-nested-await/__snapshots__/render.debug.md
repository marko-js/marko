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
  a!
</b>
```
## Change
```
INSERT: .swap + b
UPDATE: b::text " " => "a!"
```

# Update
```js
document.querySelector("button.swap").click();
```

# Update
```html
<button
  class="swap"
>
  swap
</button>
<b>
  swapped!
</b>
```
## Change
```
UPDATE: b::text "a!" => "swapped!"
```
