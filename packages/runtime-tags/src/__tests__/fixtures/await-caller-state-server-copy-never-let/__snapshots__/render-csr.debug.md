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
<p>
  a:a
</p>
```
## Change
```
INSERT: .swap + p
UPDATE: p::text@0 "" => "a"
UPDATE: p::text@2 "" => "a"
```

# Update
```js
document.querySelector("button.swap").click();
```
