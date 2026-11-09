# Render
```html
<button
  class="pick"
>
  pick
</button>
<div
  class="log"
>
  0
</div>
```
## Console
```
LOG "{\"count\":0}"
```

# Update
```js
document.querySelector(".pick").click();
```
```html
<button
  class="pick"
>
  pick
</button>
<div
  class="log"
>
  5
</div>
```
## Change
```
UPDATE: .log::text "0" => "5"
```
## Console
```
LOG "{\"count\":5}"
```
