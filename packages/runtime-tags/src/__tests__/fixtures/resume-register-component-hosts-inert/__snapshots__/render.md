# Render `{"card":true}`
```html
<button
  id="inc"
>
  0
</button>
<div
  class="card"
>
  known hosts: not registered
</div>
```

# Update
```js
document.querySelector("#inc").click();
```
```html
<button
  id="inc"
>
  1
</button>
<div
  class="card"
>
  known hosts: not registered
</div>
```
## Change
```
UPDATE: #inc::text "0" => "1"
```
