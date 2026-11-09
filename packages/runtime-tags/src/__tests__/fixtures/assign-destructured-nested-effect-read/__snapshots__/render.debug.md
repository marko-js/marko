# Render
```html
<span>
  x
</span>
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
LOG "{\"obj\":{\"label\":\"x\",\"count\":0}}"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<span>
  x
</span>
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
LOG "{\"obj\":{\"label\":\"x\",\"count\":1}}"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<span>
  x
</span>
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
LOG "{\"obj\":{\"label\":\"x\",\"count\":2}}"
```
