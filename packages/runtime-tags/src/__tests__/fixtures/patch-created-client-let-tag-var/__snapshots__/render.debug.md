# Render `{"show":false,"a":"x"}`

# Update `{"show":true,"a":"x"}`
```html
<span>
  t1
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
UPDATE: span::text " " => "t1"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<span>
  t2
</span>
<button
  class="b"
>
  b
</button>
```
## Change
```
UPDATE: span::text "t1" => "t2"
```

# Update `{"show":true,"a":"y"}`
