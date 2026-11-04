# Render `{"show":false,"promise":{},"$global":{"flag":true,"serializedGlobals":["flag"]}}`
```html
<button
  class="swap"
>
  swap
</button>
```

# Update `{"show":true,"promise":{},"$global":{"flag":true,"serializedGlobals":["flag"]}}`

# Update
```html
<button
  class="swap"
>
  swap
</button>
<span>
  a
</span>
```
## Change
```
INSERT: .swap + span
UPDATE: span::text " " => "a"
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
<span>
  swapped
</span>
```
## Change
```
UPDATE: span::text "a" => "swapped"
```
