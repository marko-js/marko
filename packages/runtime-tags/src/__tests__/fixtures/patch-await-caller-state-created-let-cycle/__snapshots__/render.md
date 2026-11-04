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
  a|b
</p>
<button
  class="log"
>
  log
</button>
```
## Change
```
INSERT: .swap + :is(p, .log)
UPDATE: p::text@0 "" => "a"
```

# Update
```js
document.querySelector("button.swap").click();
```
