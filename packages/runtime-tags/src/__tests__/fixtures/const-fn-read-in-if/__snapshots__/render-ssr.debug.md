# Render `{"a":"A","x":true}`
```html
<span>
  A
</span>
<button
  class="inc"
>
  0
</button>
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<span>
  A
</span>
<button
  class="inc"
>
  1
</button>
```
## Change
```
UPDATE: .inc::text "0" => "1"
```
