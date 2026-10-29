# Render `{"show":false,"a":"x"}`

# Update `{"show":true,"a":"x"}`
```html
<span>
  x1
</span>
<button
  class="b"
>
  b
</button>
```
## Change
```
INSERT: span, .b
UPDATE: span::text " " => "x1"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<span>
  x2
</span>
<button
  class="b"
>
  b
</button>
```
## Change
```
UPDATE: span::text "x1" => "x2"
```

# Update `{"show":true,"a":"y"}`
```html
<span>
  y2
</span>
<button
  class="b"
>
  b
</button>
```
## Change
```
UPDATE: span::text "x2" => "y2"
```
