# Render `{"show":false,"a":"x"}`

# Update `{"show":true,"a":"x"}`
```html
<span>
  2
</span>
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
INSERT: span, span, .b
UPDATE: span:nth-of-type(1)::text " " => "2"
UPDATE: span:nth-of-type(2)::text " " => "3"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<span>
  3
</span>
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
UPDATE: span:nth-of-type(1)::text "2" => "3"
UPDATE: span:nth-of-type(2)::text "3" => "4"
```

# Update `{"show":true,"a":"y"}`
