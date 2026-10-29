# Render `{"show":false,"a":"x"}`

# Update `{"show":true,"a":"x"}`
```html
<span>
  6
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
UPDATE: span::text " " => "6"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<span>
  7
</span>
<button
  class="b"
>
  b
</button>
```
## Change
```
UPDATE: span::text "6" => "7"
```

# Update `{"show":true,"a":"y"}`
