# Render
```html
<button
  class="inc"
>
  inc
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
document.querySelector(".inc").click();
```
```html
<button
  class="inc"
>
  inc
</button>
<div
  class="log"
>
  1
</div>
```
## Change
```
UPDATE: .log::text "0" => "1"
```
## Console
```
LOG "{\"count\":1}"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<button
  class="inc"
>
  inc
</button>
<div
  class="log"
>
  2
</div>
```
## Change
```
UPDATE: .log::text "1" => "2"
```
## Console
```
LOG "{\"count\":2}"
```
