# Render `{"promise":{},"$global":{"flag":true,"serializedGlobals":["flag"]}}`
```html
<button
  class="swap"
>
  swap
</button>
```

# Update
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a:3
</p>
```
## Change
```
INSERT: .swap + p
UPDATE: p::text@0 "" => "a"
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
  swapped:3
</p>
```
## Change
```
UPDATE: p::text@0 "a" => "swapped"
```
