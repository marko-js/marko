# Render `{"which":true,"label":"a"}`
```html
<button
  class="inc"
>
  a 0
</button>
<p>
  0
</p>
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<button
  class="inc"
>
  a 1
</button>
<p>
  1
</p>
```
## Change
```
UPDATE: .inc::text@2 "0" => "1"
UPDATE: p::text "0" => "1"
```

# Update `{"which":true,"label":"b"}`
```html
<button
  class="inc"
>
  b 1
</button>
<p>
  1
</p>
```
## Change
```
UPDATE: .inc::text@0 "a" => "b"
```
