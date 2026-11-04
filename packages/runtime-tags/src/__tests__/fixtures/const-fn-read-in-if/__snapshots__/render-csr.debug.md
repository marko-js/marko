# Render `{"a":"A","x":true}`
```html
<span>
  A
</span>
<button
  class="inc"
>
  0
</button>
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<span>
  A
</span>
<button
  class="inc"
>
  1
</button>
```
## Change
```
UPDATE: .inc::text "0" => "1"
```

# Update `{"a":"B","x":false}`
```html
<button
  class="inc"
>
  1
</button>
```
## Change
```
REMOVE: span
```

# Update `{"a":"C","x":true}`
```html
<span>
  C
</span>
<button
  class="inc"
>
  1
</button>
```
## Change
```
INSERT: span
UPDATE: span::text " " => "C"
```
