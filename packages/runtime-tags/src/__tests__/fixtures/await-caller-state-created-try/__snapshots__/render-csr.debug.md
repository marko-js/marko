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
  a
</p>
<b>
  static
</b>
```
## Change
```
INSERT: .swap + :is(p, b)
UPDATE: p::text " " => "a"
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
  swapped
</p>
<b>
  static
</b>
```
## Change
```
UPDATE: p::text "a" => "swapped"
```
