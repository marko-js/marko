# Render `{"label":"a"}`
```html
<span>
  a
</span>
<em>
  a
</em>
<button
  class="inc"
>
  0
</button>
```

# Update `{"label":"b"}`
```html
<span>
  b
</span>
<em>
  b
</em>
<button
  class="inc"
>
  0
</button>
```
## Change
```
UPDATE: span::text "a" => "b"
UPDATE: em::text "a" => "b"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<span>
  b
</span>
<em>
  b
</em>
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

# Update `{"label":"c"}`
```html
<span>
  c
</span>
<em>
  c
</em>
<button
  class="inc"
>
  1
</button>
```
## Change
```
UPDATE: span::text "b" => "c"
UPDATE: em::text "b" => "c"
```
