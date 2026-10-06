# Render
```html
<button
  class="inc"
>
  0
</button>
<button
  class="row"
>
  0
</button>
<button
  class="row"
>
  0
</button>
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<button
  class="inc"
>
  1
</button>
<button
  class="row"
>
  0
</button>
<button
  class="row"
>
  0
</button>
```
## Change
```
UPDATE: .inc::text "0" => "1"
```

# Update
```js
document.querySelector("button.row").click();
```
```html
<button
  class="inc"
>
  1
</button>
<button
  class="row"
>
  1
</button>
<button
  class="row"
>
  0
</button>
```
## Change
```
UPDATE: button:nth-of-type(2)::text "0" => "1"
```
