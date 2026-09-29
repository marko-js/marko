# Render
```html
<button
  class="row1"
>
  1:m0
</button>
<button
  class="row2"
>
  2:m0
</button>
```

# Update
```js
document.querySelector("button.row1").click();
```
```html
<button
  class="row1"
>
  2:m1
</button>
<button
  class="row2"
>
  3:m0
</button>
```
## Change
```
UPDATE: .row1::text "1:m0" => "2:m1"
UPDATE: .row2::text "2:m0" => "3:m0"
```
