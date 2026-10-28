# Render `{"promise":{},"$global":{"flag":true,"serializedGlobals":["flag"]}}`
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

# Update `{"promise":{},"$global":{"flag":true,"serializedGlobals":["flag"]}}`

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
