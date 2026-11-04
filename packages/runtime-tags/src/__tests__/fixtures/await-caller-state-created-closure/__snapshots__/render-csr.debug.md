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
  a:p
</p>
```
## Change
```
INSERT: .swap + p
UPDATE: p::text@0 "" => "a"
UPDATE: p::text@2 "" => "p"
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
  swapped:p
</p>
```
## Change
```
UPDATE: p::text@0 "a" => "swapped"
```
