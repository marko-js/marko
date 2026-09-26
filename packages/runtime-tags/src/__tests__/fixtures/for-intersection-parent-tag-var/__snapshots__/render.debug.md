# Render
```html
<button
  class="row1"
>
  1:0
</button>
<button
  class="row2"
>
  2:0
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
  2:1
</button>
<button
  class="row2"
>
  3:0
</button>
```
## Change
```
UPDATE: .row1::text "1:0" => "2:1"
UPDATE: .row2::text "2:0" => "3:0"
```
