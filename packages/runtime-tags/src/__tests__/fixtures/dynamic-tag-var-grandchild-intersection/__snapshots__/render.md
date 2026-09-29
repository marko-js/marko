# Render
```html
<span>
  0
</span>
<button
  class="inc"
>
  0:0
</button>
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<span>
  1
</span>
<button
  class="inc"
>
  1:1
</button>
```
## Change
```
UPDATE: span::text "0" => "1"
UPDATE: .inc::text "0:0" => "1:1"
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<span>
  2
</span>
<button
  class="inc"
>
  2:2
</button>
```
## Change
```
UPDATE: span::text "1" => "2"
UPDATE: .inc::text "1:1" => "2:2"
```
