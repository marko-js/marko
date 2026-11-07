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
  swapped:3
</p>
```
## Change
```
INSERT: .swap + p
UPDATE: p::text@0 "" => "swapped"
```
