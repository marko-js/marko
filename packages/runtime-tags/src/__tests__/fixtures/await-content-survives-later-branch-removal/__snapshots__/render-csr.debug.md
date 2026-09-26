# Render
```html
<span>
  shown
</span>
<button
  class="hide"
>
  hide
</button>
```

# Update
```html
<button
  class="inc"
>
  0
</button>
<span>
  shown
</span>
<button
  class="hide"
>
  hide
</button>
```
## Change
```
INSERT: .inc
UPDATE: .inc::text " " => "0"
```

# Update
```js
document.querySelector(".hide").click();
```
```html
<button
  class="inc"
>
  0
</button>
<button
  class="hide"
>
  hide
</button>
```
## Change
```
REMOVE: .inc + span
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<button
  class="inc"
>
  1
</button>
<button
  class="hide"
>
  hide
</button>
```
## Change
```
UPDATE: .inc::text "0" => "1"
```
