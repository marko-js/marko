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
<p>
  a:true
</p>
```
## Change
```
INSERT: .swap + p
UPDATE: p::text " " => "a:true"
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
  swapped:true
</p>
```
## Change
```
UPDATE: p::text "a:true" => "swapped:true"
```
