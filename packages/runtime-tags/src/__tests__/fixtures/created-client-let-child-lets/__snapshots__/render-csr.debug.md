# Render `{"show":false,"a":"x"}`

# Update `{"show":true,"a":"x"}`
```html
<span>
  3
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
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<span>
  4
</span>
<button
  class="b"
>
  b
</button>
```
## Change
```
UPDATE: span::text "3" => "4"
```

# Update `{"show":true,"a":"y"}`
